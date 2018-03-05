# Fortnite Calculations

## The Damage Formula

https://www.reddit.com/r/FORTnITE/comments/7nh17p/fortnite_mech_workshop_ep3_how_to_calculate_damage/  
https://docs.google.com/spreadsheets/d/1yHZGNiMUAK_D2VPxLxzU7EPqvuLQ7PsXCxttZBxdxpM/edit#gid=654849019

## Calculation

**ranged_damage = [base_damage \* rarity_mod \* evolution_mod \* crystal_mod] \* pellet_count \* level_mod \* offense_mod \* perks_mod**

## Razorblade Example

### Perks

**Grey weapon base damage:** 21

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
