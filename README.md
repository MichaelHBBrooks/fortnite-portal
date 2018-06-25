# Fortnite Calculations

## The Damage Formula

https://www.reddit.com/r/FORTnITE/comments/7nh17p/fortnite_mech_workshop_ep3_how_to_calculate_damage/  
https://docs.google.com/spreadsheets/d/1yHZGNiMUAK_D2VPxLxzU7EPqvuLQ7PsXCxttZBxdxpM/edit#gid=654849019

## Calculation

**ranged_damage = [base_damage \* rarity_mod \* evolution_mod \* crystal_mod] \* pellet_count \* level_mod \* offense_mod \* perks_mod**

### The Multipliers

#### base_damage
The damage of the common (gray) version of the weapon. For pellet weapons it's the damage of a single pellet.

#### pellet_count
The number of pellets the weapon shoots per shot.

#### rarity_mod
This is a coeffecient applied based on the rarity of the weapon. Each rarity above Common adds 0.125.

| Rarity    | Color  | Coefficient |
|-----------|--------|-------------|
| Common    | Gray   | 1           |
| Uncomon   | Green  | 1.125       |
| Rare      | Blue   | 1.25        |
| Epic      | Purple | 1.375       |
| Legendary | Orange | 1.5         |

#### evolution_mod
Starts at 1 and increases by 0.2 for every star after that.

| Stars      | Coefficient  |
|------------|--------------|
| \*         | 1            |
| \*\*       | 1.2          |
| \*\*\*     | 1.4          |
| \*\*\*\*   | 1.6          |
| \*\*\*\*\* | 1.8          |

#### crystal_mod
Once evolved to the crystal form of the evolution, the coefficient changes from 1 to 1.2.

| Material    | Coefficient  |
|-------------|--------------|
| Copper      | 1            |
| Silver      | 1            |
| Malachite   | 1            |
| Obsidian    | 1            |
| Shadowshard | 1.2          |
| Brightcore  | 1            |
| Sunbeam     | 1.2          |

#### level_mod

Starts at 1 and increases by 0.05 each time the schematic levels up. Note that a 20/20 and a 20/30 weapon have the same modifier (1.95) but the second one is higher due to the evolution modifier of 1.4 instead of 1.2.

#### offense_mod
The ranged damage multiplier coming from the offense FORT stat and any survivor squad set bonuses.

**Formula:** [1 + (offense + set_bonuses) / 100]

#### perks_mod
The sum of all damage perks from the weapon, main hero, support hero, buffs (eg. war cry).

**Formula:** [1 + sum(perk1, perk2, ..., perk*N*)]

## Razorblade Example

### Perks

**Gray weapon base damage:** 21

| Level | Perk                                                                 |
| ----- | -------------------------------------------------------------------- |
| 5     | +30% Magazine Size                                                   |
| 10    | +30% Crit Damage                                                     |
| 15    | +45% Magazine Size                                                   |
| 20    | +20% Damage                                                          |
| 25    | +10% Weapon Damage (Energy). Causes Affliction damage for 6 seconds. |

### My Stats

**Offense:** 1797  
**Squad Ranged Attack Bonus:** 10

### Razorblade Calculation

**ranged_damage = [base_damage \* rarity_mod \* evolution_mod \* crystal_mod] \* pellet_count \* level_mod \* offense_mod \* perks_mod**

**base damage:** 21  
**rarity_mod:** (1 + (5 - 1) _ 0.125) = 1.5  
**evolution_mod:** (1 + (3 - 1) _ 0.2) = 1.4  
**crystal_mod:** 1  
**pellet_count:** 1  
**level_mod:** (1 + (30 - 1) \* 0.05) = 2.45  
**offense_mod:** (1 + (1797 + 10) / 100) = 19.07  
**perks_mod:** (1 + (0.20 + 0.10)) = 1.3

21 \* 1.5 \* 1.4 \* 1 = 44.1  
It is rounded to 44 since it does not shoot pellets.

44 \* 1 \* 2.45 \* 19.07 \* 1.3 = 2672.4698  
It is rounded to **2672.5** for the tooltip.
