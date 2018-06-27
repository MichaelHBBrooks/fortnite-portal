/**
 *
 * @param {number} baseDmg The base damage of the weapon.
 * @param {string} rarity The rarity of the weapon.
 * @param {number} stars A number representing the number of stars on the weapon.
 * @param {boolean} crystal True if the weapon is crystal (eg. Shadowshard or Sunbeam), false
 *                          otherwise.
 * @param {number} pellets The number of pellets the weapon shoots.
 * @param {number} weaponLevel The current level of the weapon (not to be confused with power level
 *                             or evolution level).
 * @param {number} offense The player's offense listed in their Heroes tab (FORT + skills +
 *                         research).
 * @param {number} squadBonus The sum of squad ranged attack bonuses.
 * @param {Array} perks An array of objects representing the weapon's perks.
 * @param {string} mainHero The class of the hero in the main slot (eg. "Master Grenadier").
 * @param {string} supportHero The class of the hero in the support slot.
 * @param {string} tacticalHero The class of the hero in the tactical slot.
 * @param {Array} buffs An array of buffs being applied to the player.
 */
export function damageCalc(
    baseDmg,
    rarity,
    stars,
    crystal,
    pellets,
    weaponLevel,
    offense,
    squadBonus,
    perks,
    mainHero,
    supportHero,
    tacticalHero,
    buffs
) {
    const rarityMod = getRarityMod(rarity);
    const evolutionMod = getEvolutionMod(stars);
    const crystalMod = getCrystalMod(crystal);
    const levelMod = getLevelMod(weaponLevel);
    const offenseMod = getOffenseMod(offense, squadBonus);
    const perksMod = getPerksMod(perks, mainHero, supportHero, tacticalHero, buffs);
    // console.log("baseDmg: " + baseDmg);
    // console.log("rarityMod: " + rarityMod);
    // console.log("evolutionMod: " + evolutionMod);
    // console.log("crystalMod: " + crystalMod);
    // console.log("pellets: " + pellets);
    // console.log("levelMod: " + levelMod);
    // console.log("offenseMod: " + offenseMod);
    // console.log("perksMod: " + perksMod);
    const weaponMod =
        pellets === 1
            ? Math.round(baseDmg * rarityMod * evolutionMod * crystalMod)
            : Math.round(baseDmg * rarityMod * evolutionMod * crystalMod * 10) / 10;
    // console.log("weaponMod: " + weaponMod);
    return weaponMod * pellets * levelMod * offenseMod * perksMod;
}

function getRarityMod(rarity) {
    switch (rarity) {
        case "common":
            return 1;
        case "uncommon":
            return 1.125;
        case "rare":
            return 1.25;
        case "epic":
            return 1.375;
        case "legendary":
            return 1.5;
        default:
            throw new Error("Unknown rarity");
    }
}

function getEvolutionMod(stars) {
    return 1 + (stars - 1) * 0.2;
}

function getCrystalMod(crystal) {
    return crystal ? 1.2 : 1;
}

function getLevelMod(level) {
    return 1 + (level - 1) * 0.05;
}

function getOffenseMod(offense, squadBonus) {
    return 1 + (offense + squadBonus) / 100;
}

function getPerksMod(perks, mainHero, supportHero, tacticalHero, buffs) {
    let perksSum = perks.reduce((accumulator, current) => {
        if (current.name === "dmg") {
            return accumulator + 10 + (current.level - 1) * 5;
        } else if (
            current.name === "energy" ||
            current.name === "fire" ||
            current.name === "fire" ||
            current.name === "nature"
        ) {
            return accumulator + (current.level - 1) * 5;
        } else if (current.name === "physical") {
            return accumulator + 20 + (current.level - 1) * 6;
        }
        return accumulator;
    }, 0);
    return 1 + perksSum / 100;
}

/**
 * For a given critical rating, return its equivalent critical chance.
 * @param {number} critRating The sum of critical rating values.
 * @param {boolean} round If true, round to the nearest 0.5. If false, do not round.
 * @return The critical chance for a given critical rating.
 */
export function getCritChance(critRating, round) {
    const cc = round
        ? Math.round(75 * critRating / (50 + critRating) * 2) / 2
        : 75 * critRating / (50 + critRating);
    return cc;
}
