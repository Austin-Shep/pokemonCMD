# Project
create a comand line pokemon battle sim. the game will mimic Stadium/revolution gameplay (i.e. you will select a team of of 3 'mons) to start, we will make 3 teams. these teams will be balance with 2 opposing typing triangles and a counter to the starter triangle

## teams
|  | team 1| team 2 | team 3|
|---|---|---|---|
|lead| Charizard | Blastoise | Venisaur |
|leadCtr| Jolteon| flareon   | Vaporeon|  
|tertiary| Golem | Pidgeot   | Machamp|

### stats 
I propose using tiers for stats, ranking them from 1 - 5 (or 1 - 10). 

### generation 
I propose we create a class constructor, in order, for each of the following elements: 
1. the Pokemon
2. its moves
3. the full team
from here we can store the raw stats in JSON in the data folder, then building the, based on the classes. allowing the easy addition of new teams. 


### the game 
the game logic shpuld remain shallow. calling methods that we've prototyped to the classes, based on inquirers prompts/responses. 
