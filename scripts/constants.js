const sprt = '-';

const headers = {
	'DW5': ['Level', 'Stats', '4th']
};

const guideSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/></svg>';
const checkboxSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>';

const warriors = {
	'Zhao Yun': [
		{
			'Game': "DW5",
			'Name': "Fierce Dragon",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Charge: 16",
				"Life: 17",
				"Musou: 17",
				"Attack: 17",
				"Defense: 17"
			],
			'Stage': "Battle of Cheng Du",
			'Requirement': "Defeat Liu Xun's three sub-generals then defeat Liu Xun himself, and capture Luo Castle."
		}
	],
	'Guan Yu': [
		{
			'Game': "DW5",
			'Name': "Blue Moon Dragon",
			'Rank': 4,
			'Base': 38,
			'Element': "Light",
			'Stats': [
				"Life: 18",
				"Attack: 18",
				"Defense: 17",
				"Horse: 16",
				"Charge: 16"
			],
			'Stage': "Battle of Fan Castle",
			'Requirement': "Defeat Niu Jin and Yue Jin before the water attack is triggered."
		}
	],
	'Zhang Fei': [
		{
			'Game': "DW5",
			'Name': "Viper Blade",
			'Rank': 4,
			'Base': 39,
			'Element': "Light",
			'Stats': [
				"Fill: 16",
				"Attack: 19",
				"Defense: 15",
				"Horse: 16",
				"Musou: 17"	
			],
			'Stage': "Battle of Chang Ban (Shu)",
			'Requirement': "As soon as the stage starts, defeat Wen Pin, Xiahou Dun and Xiahou En."
		}
	],
	'Zhuge Liang': [
		{
			'Game': "DW5",
			'Name': "Peacock Feather",
			'Rank': 4,
			'Base': 32,
			'Element': "Medium",
			'Stats': [
				"Charge: 18",
				"Bow: 15",
				"Musou: 20",
				"Fill: 15",
				"Defense: 18"
			],
			'Stage': "Battle of Tian Shui (Shu)",
			'Requirement': "Defeat Xiahou Mao and capture Nan An Castle; also defeat Cui Liang and capture An Ding Castle. Wait for Jiang Wei to return to Tian Shui Castle, and defeat him before he enters Tian Shui Castle."
		}
	],
	'Liu Bei': [
		{
			'Game': "DW5",
			'Name': "Gold Moon Dragon",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Luck: 20",
				"Horse: 15",
				"Speed: 18",
				"Defense: 18",
				"Musou: 15"
			],
			'Stage': "Battle of Yi Ling",
			'Requirement': "Defeat Ling Tong, Gan Ning, Lu Xun, and Sun Shang Xiang."
		}
	],
	'Ma Chao': [
		{
			'Game': "DW5",
			'Name': "Stallion Fury",
			'Rank': 4,
			'Base': 38,
			'Element': "Medium",
			'Stats': [
				"Horse: 20",
				"Defense: 16",
				"Life: 15",
				"Speed: 15",
				"Attack: 17"
			],
			'Stage': "Battle of Tong Gate (Ma Chao's Forces)",
			'Requirement': "Knock Cao Cao off his horse before he crosses the Yellow River."
		}
	],
	'Huang Zhong': [
		{
			'Game': "DW5",
			'Name': "Oracle Sword",
			'Rank': 4,
			'Base': 36,
			'Element': "Light",
			'Stats': [
				"Fill: 18",
				"Horse: 15",
				"Bow: 20",
				"Def: 15",
				"Musou: 15"
			],
			'Stage': "Battle of Mt. Ding Jun (Shu)",
			'Requirement': "Defeat Xiahou Yuan and Zhang He within 5 minutes before Cao Cao appears."
		}
	],
	'Jiang Wei': [
		{
			'Game': "DW5",
			'Name': "Blink",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Luck: 15",
				"Speed: 15",
				"Attack: 16",
				"Musou: 18",
				"Life: 17",
			],
			'Stage': "Battle of Tian Shui (Wei)",
			'Requirement': "Defeat the reinforcement general, Gao Xiong."
		}
	],
	'Wei Yan': [
		{
			'Game': "DW5",
			'Name': "Comet Strike",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Attack: 18",
				"Defense: 16",
				"Musou: 15",
				"Charge: 16",
				"Luck: 15"
			],
			'Stage': "Battle of Chen Cang (Shu)",
			'Requirement': "Defeat the four Defense Captains guarding Chen Cang."
		}
	],
	'Pang Tong': [
		{
			'Game': "DW5",
			'Name': "Tornado Staff",
			'Rank': 4,
			'Base': 32,
			'Element': "Medium",
			'Stats': [
				"Defense: 17",
				"Life: 15",
				"Fill: 18",
				"Bow: 16",
				"Luck: 15",
			],
			'Stage': "Conquest of Nan Zhong (Shu)",
			'Requirement': "Succeed in the strategies against the poison swamps, wild animals, and armored troops."
		}
	],
	'Yue Ying': [
		{
			'Game': "DW5",
			'Name': "Oblivion",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Life: 16",
				"Defense: 17",
				"Charge: 15",
				"Horse: 15",
				"Bow: 16"
			],
			'Stage': "Battle of Wu Zhang Plains (Shu)",
			'Requirement': "Eliminate Deng Ai before he sets up the catapults."
		}
	],
	'Guan Ping': [
		{
			'Game': "DW5",
			'Name': "Young Dragon",
			'Rank': 4,
			'Base': 36,
			'Element': "Light",
			'Stats': [
				"Charge: 16",
				"Luck: 15",
				"Bow: 15",
				"Attack: 17",
				"Life: 15"
			],
			'Stage': "Escape from Chi Bi (Shu)",
			'Requirement': "Defeat all generals, not including sub-generals."
		}
	],
	'Xing Cai': [
		{
			'Game': "DW5",
			'Name': "Ambition",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Horse: 15",
				"Speed: 16",
				"Defense: 17",
				"Musou: 17",
				"Life: 15"
			],
			'Stage': "Battle of Bai Di Castle (Shu)",
			'Requirement': "Successfully save the peasants, and have Liu Shan come out to meet you and lead him back to the castle."
		}
	],
	'Xiahou Dun': [
		{
			'Game': "DW5",
			'Name': "Kirin Fang",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Horse: 16",
				"Defense: 17",
				"Attack: 17",
				"Musou: 16",
				"Charge: 17"
			],
			'Stage': "Battle of Fan Castle (Wei)",
			'Requirement': "Defeat Guan Ping before the water attack."
		}
	],
	'Dian Wei': [
		{
			'Game': "DW5",
			'Name': "Mad Bull",
			'Rank': 4,
			'Base': 36,
			'Element': "Light",
			'Stats': [
				"Charge: 15",
				"Fill: 15",
				"Attack: 18",
				"Musou: 17",
				"Life: 17"
			],
			'Stage': "Battle of Wan Castle (Wei)",
			'Requirement': "Rendezvous with Cao Cao, lead him to the escape gates, defeating enemy officers along the way. Once Cao Cao leaves the castle, do not let a single enemy pass the gate until a message that Cao Cao's escape is starting appears."
		}
	],
	'Xu Zhu': [
		{
			'Game': "DW5",
			'Name': "Stone Crusher",
			'Rank': 4,
			'Base': 38,
			'Element': "Light",
			'Stats': [
				"Fill: 17",
				"Bow: 19",
				"Life: 20",
				"Luck: 15",
				"Defense: 19"
			],
			'Stage': "Battle of Tong Gate (Wei)",
			'Requirement': "Defeat Pang De and Ma Chao."
		}
	],
	'Cao Cao': [
		{
			'Game': "DW5",
			'Name': "Wrath of Heaven",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Charge: 17",
				"Bow: 15",
				"Life: 17",
				"Horse: 17",
				"Attack: 17"
			],
			'Stage': "Battle of Xia Pi (Wei)",
			'Requirement': "Right after Gao Shun begins to defend the water gate, defeat him and Zhang Liao."
		}
	],
	'Xiahou Yuan': [
		{
			'Game': "DW5",
			'Name': "Enforcer Rod",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Charge: 16",
				"Attack: 16",
				"Life: 17",
				"Bow: 19",
				"Musou: 17"
			],
			'Stage': "Battle of Chi Bi (Wei)",
			'Requirement': "Defeat Pang Tong as he defects, Zhuge Liang before he can successfully call the wind, and Huang Gai before he can burn the ships."
		}
	],
	'Zhang Liao': [
		{
			'Game': "DW5",
			'Name': "Gold Wyvern",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Life: 17",
				"Attack: 17",
				"Fill: 15",
				"Horse: 18",
				"Luck: 15"
			],
			'Stage': "Battle of He Fei (Wei)",
			'Requirement': "Defeat nine generals/sub-generals within 10 minutes. And Sun Quan will comment that 'One man struck fear in my entire army by himself!'."
		}
	],
	'Xu Huang': [
		{
			'Game': "DW5",
			'Name': "Marauder",
			'Rank': 4,
			'Base': 36,
			'Element': "Light",
			'Stats': [
				"Attack: 17",
				"Life: 18",
				"Speed: 15",
				"Fill: 15",
				"Luck: 15"
			],
			'Stage': "Battle of Chang Ban (Wei)",
			'Requirement': "Defeat Guan Yu and Zhang Fei once the final wave of reinforcements appears."
		}
	],
	'Zhang He': [
		{
			'Game': "DW5",
			'Name': "Phoenix Talon",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Fill: 15",
				"Speed: 19",
				"Attack: 16",
				"Musou: 18",
				"Charge: 15"
			],
			'Stage': "Battle of Jie Ting (Wei)",
			'Requirement': "Surround Ma Su, and defeat Gao Xiong and Wang Ping, as well as the checkpoint near them. Later, take down all of Ma Su sub-officers. Once Ma Su starts retreating to the main camp, defeat him."
		}
	],
	'Zhen Ji': [
		{
			'Game': "DW5",
			'Name': "Dark Moon Flute",
			'Rank': 4,
			'Base': 32,
			'Element': "Medium",
			'Stats': [
				"Fill: 20",
				"Horse: 17",
				"Bow: 18",
				"Defense: 18",
				"Life: 17"
			],
			'Stage': "Battle of He Fei Castle (Wei)",
			'Requirement': "Defeat 300 enemies, and rendezvous with Cao Pi."
		}
	],
	'Cao Ren': [
		{
			'Game': "DW5",
			'Name': "Roc",
			'Rank': 4,
			'Base': 32,
			'Element': "Light",
			'Stats': [
				"Fill: 15",
				"Bow: 15",
				"Attack: 15",
				"Defense: 18",
				"Life: 19"
			],
			'Stage': "Escape from Chi Bi (Wei)",
			'Requirement': "Quickly defeat all the enemy reinforcements except for Liu Bei and Guan Yu. Take out the leading general of each enemy ambush before the corresponding ally reinforcement offers to help. Defeat Sun Quan when he arrives."
		}
	],
	'Cao Pi': [
		{
			'Game': "DW5",
			'Name': "Chaos",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Fill: 15",
				"Speed: 19",
				"Defense: 15",
				"Attack: 15",
				"Musou: 19"
			],
			'Stage': "Battle of Wu Zhang Plains (Wei)",
			'Requirement': "After Zhuge Liang passes away, destroy each arbalest with Cao Ren still alive."
		}
	],
	'Pang De': [
		{
			'Game': "DW5",
			'Name': "Heavenly Halberd",
			'Rank': 4,
			'Base': 36,
			'Element': "Light",
			'Stats': [
				"Luck: 15",
				"Horse: 17",
				"Defense: 15",
				"Attack: 16",
				"Life: 18"
			],
			'Stage': "Battle of Mt. Ding Jun (Wei)",
			'Requirement': "Defeat Zhao Yun, Guan Ping, Wei Yan, and Huang Zhong before Cao Cao arrives."
		}
	],
	'Zhou Yu': [
		{
			'Game': "DW5",
			'Name': "Ancients Sword",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Charge: 17",
				"Defense: 15",
				"Musou: 18",
				"Bow: 16",
				"Attack: 16"
			],
			'Stage': "Battle of the Wu Territory (Wu)",
			'Requirement': "Take over both of the enemy forts by defeating both Yan Baihu and Wang Lang."
		}
	],
	'Lu Xun': [
		{
			'Game': "DW5",
			'Name': "Falcon",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Fill: 15",
				"Luck: 18",
				"Speed: 20",
				"Attack: 15",
				"Musou: 19"
			],
			'Stage': "Battle of Bai Di Castle (Wu)",
			'Requirement': "Defeat Jiang Wei and Ma Chao before Yue Ying arrives, she arrives after you defeat Xing Cai or enter Liu Chan's base."
		}
	],
	'Taishi Ci': [
		{
			'Game': "DW5",
			'Name': "Tiger Slayer",
			'Rank': 4,
			'Base': 38,
			'Element': "Medium",
			'Stats': [
				"Charge: 15",
				"Horse: 15",
				"Bow: 15",
				"Defense: 18",
				"Life: 18"
			],
			'Stage': "Battle of Wu Territory (Allied forces)",
			'Requirement': "After Sun Quan is lured into the eastern fort, defeat him before Zhou Tai can rendezvous with him."
		}
	],
	'Sun Shang Xiang': [
		{
			'Game': "DW5",
			'Name': "Sol Chakram",
			'Rank': 4,
			'Base': 32,
			'Element': "Heavy",
			'Stats': [
				"Luck: 19",
				"Bow: 15",
				"Speed: 19",
				"Life: 15",
				"Defense: 17"
			],
			'Stage': "Invasion of Nan Zhong",
			'Requirement': "Don't defeat any generals until the bridge collapses and go to Sun Quan for a scene, after the scene defeat every general and sub-general, including reinforcements."
		}
	],
	'Sun Jian': [
		{
			'Game': "DW5",
			'Name': "Savage Tiger",
			'Rank': 4,
			'Base': 34,
			'Element': "Light",
			'Stats': [
				"Fill: 18",
				"Defense: 16",
				"Horse: 16",
				"Musou: 15",
				"Life: 15"
			],
			'Stage': "Battle of Si Shui Gate (Allied forces)",
			'Requirement': "Defeat Lu Bu within 5 minutes of his appearance."
		}
	],
	'Sun Quan': [
		{
			'Game': "DW5",
			'Name': "Master Wolf",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Fill: 15",
				"Bow: 15",
				"Attack: 16",
				"Musou: 18",
				"Charge: 17"
			],
			'Stage': "Battle of Chi Bi (Allied forces)",
			'Requirement': "Ensure that all parts of the plan succeed. Huang Gai must set Cao Cao's boats on fire, the bridges must be knocked down for Pang Tong, Zhuge Liang must successfully summon the southern wind, and Zhou Yu must not be defeated."
		}
	],
	'Lu Meng': [
		{
			'Game': "DW5",
			'Name': "White Tiger",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Charge: 15",
				"Horse: 16",
				"Bow: 15",
				"Defense: 17",
				"Life: 17"
			],
			'Stage': "Battle of Fan Castle (Allied forces)",
			'Requirement': "Defeat Zhang Bao and Zhang Fei."
		}
	],
	'Gan Ning': [
		{
			'Game': "DW5",
			'Name': "Sea Master",
			'Rank': 4,
			'Base': 38,
			'Element': "Light",
			'Stats': [
				"Charge: 15",
				"Luck: 18",
				"Speed: 15",
				"Attack: 19",
				"Musou: 15"
			],
			'Stage': "Battle of Xia Kou (Huang Zu's forces)",
			'Requirement': "Defeat Ling Tong and Ling Cao within 2 minutes of the stage starting."
		}
	],
	'Huang Gai': [
		{
			'Game': "DW5",
			'Name': "Dark Shadow",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Charge: 15",
				"Luck: 16",
				"Defense: 17",
				"Attack: 17",
				"Life: 15"
			],
			'Stage': "Yellow Turban Rebellion (Allied forces)",
			'Requirement': "Defeat all officers and sub-officers outside of Zhang Jiao's garrison."
		}
	],
	'Sun Ce': [
		{
			'Game': "DW5",
			'Name': "Overlord",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Charge: 15",
				"Attack: 18",
				"Life: 15",
				"Speed: 18",
				"Musou: 15"
			],
			'Stage': "The Trials of Sun Ce (Sun Ce's forces)",
			'Requirement': "Defeat all of Yu Ji's phantoms, Sun Jian, and Da Qiao in less than 10 minutes."
		}
	],
	'Da Qiao': [
		{
			'Game': "DW5",
			'Name': "Qiao Beauty",
			'Rank': 4,
			'Base': 32,
			'Element': "Heavy",
			'Stats': [
				"Luck: 18",
				"Attack: 16",
				"Life: 15",
				"Defense: 15",
				"Musou: 19"
			],
			'Stage': "Battle of Xia Kou (Wu)",
			'Requirement': "Defeat Cai Mao and Gan Ning before Ling Tong is defeated."
		}
	],
	'Xiao Qiao': [
		{
			'Game': "DW5",
			'Name': "Qiao Grace",
			'Rank': 4,
			'Base': 32,
			'Element': "Heavy",
			'Stats': [
				"Defense: 15",
				"Musou: 15",
				"Fill: 15",
				"Charge: 17",
				"Speed: 19"
			],
			'Stage': "Battle of Jing Province (Wu)",
			'Requirement': "Defeat Cai Mao and Lu Gong before Sun Jian is ambushed."
		}
	],
	'Zhou Tai': [
		{
			'Game': "DW5",
			'Name': "Dusk",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Fill: 16",
				"Speed: 15",
				"Attack: 17",
				"Musou: 18",
				"Life: 15"
			],
			'Stage': "Battle of Yi Ling (Wu)",
			'Requirement': "Zhou Tai must defeat Zhao Yun before the fire attack goes off. The fire attack must succeed."
		}
	],
	'Ling Tong': [
		{
			'Game': "DW5",
			'Name': "Dragon Fury",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Charge: 16",
				"Luck: 16",
				"Speed: 19",
				"Attack: 17",
				"Life: 15"
			],
			'Stage': "Battle of He Fei (Wu)",
			'Requirement': "Ling Tong must defeat Zhang Liao after each of his four appearances."
		}
	],
	'Sima Yi': [
		{
			'Game': "DW5",
			'Name': "Dark Feather",
			'Rank': 4,
			'Base': 32,
			'Element': "Medium",
			'Stats': [
				"Charge: 15",
				"Defense: 16",
				"Musou: 19",
				"Fill: 15",
				"Attack: 15"
			],
			'Stage': "Battle of Chen Cang (Wei)",
			'Requirement': "Stop the siege machine lines by taking all three of the enemy defense bases along the south before any damage is done to your castle walls."
		}
	],
	'Diao Chan': [
		{
			'Game': "DW5",
			'Name': "Diva",
			'Rank': 4,
			'Base': 32,
			'Element': "Heavy",
			'Stats': [
				"Fill: 18",
				"Luck: 18",
				"Speed: 19",
				"Defense: 16",
				"Musou: 18"
			],
			'Stage': "Battle of Xia Pi",
			'Requirement': "Defeat all generals and sub-generals before Cao Cao arrives. The player must also prevent any allies from being defeated. Defeat the sub-generals in the west and Xiahou Dun and Xiahou Yuan will charge, so defeat them. Then defeat Liu Bei, Zhang Fei, and Guan Yu. Eliminating the rest of the generals will trigger the Precious Item to appear in the southwest. Get the weapon and then defeat Cao Cao."
		}
	],
	'Lu Bu': [
		{
			'Game': "DW5",
			'Name': "Sky Scorcher",
			'Rank': 4,
			'Base': 40,
			'Element': "Medium",
			'Stats': [
				"Horse: 20",
				"Defense: 20",
				"Attack: 20",
				"Musou: 19",
				"Life: 19"
			],
			'Stage': "Battle of Chang Shan",
			'Requirement': "Defeat 1000 enemies."
		}
	],
	'Dong Zhuo': [
		{
			'Game': "DW5",
			'Name': "Horror",
			'Rank': 4,
			'Base': 36,
			'Element': "Medium",
			'Stats': [
				"Luck: 17",
				"Horse: 17",
				"Defense: 15",
				"Attack: 18",
				"Life: 15"
			],
			'Stage': "Battle of Liang Zhou (Dong Zhuo's Forces)",
			'Requirement': "After capturing all five of the enemy bases, defeat Ma Chao and Pang De."
		}
	],
	'Yuan Shao': [
		{
			'Game': "DW5",
			'Name': "Sword of Kings",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Fill: 15",
				"Horse: 15",
				"Bow: 15",
				"Defense: 18",
				"Musou: 17"
			],
			'Stage': "Battle of Guan Du (Yuan Shao's forces)",
			'Requirement': "Protect Yan Liang and Wen Chou, and demoralize Cao Cao's troops until they let you in the castle."
		}
	],
	'Zhang Jiao': [
		{
			'Game': "DW5",
			'Name': "Volcano Staff",
			'Rank': 4,
			'Base': 32,
			'Element': "Medium",
			'Stats': [
				"Attack: 15",
				"Musou: 17",
				"Luck: 15",
				"Fill: 9",
				"Charge: 16"
			],
			'Stage': "Yellow Turban Rebellion (Yellow Turban Forces)",
			'Requirement': "Rendezvous with Zhang Bao and Zhang Liang, brainwash Sun Jian and Cao Cao's armies, and successfully get Zhang Man Cheng to drop rocks on the enemy. No allies may be defeated."
		}
	],
	'Meng Huo': [
		{
			'Game': "DW5",
			'Name': "King of Beasts",
			'Rank': 4,
			'Base': 36,
			'Element': "Light",
			'Stats': [
				"Charge: 15",
				"Fill: 15",
				"Horse: 15",
				"Attack: 18",
				"Life: 19"
			],
			'Stage': "Conquest of Nan Zhong",
			'Requirement': "Defeat Yue Ying, Huang Zhong and Wei Yan."
		}
	],
	'Zhu Rong': [
		{
			'Game': "DW5",
			'Name': "Inferno",
			'Rank': 4,
			'Base': 34,
			'Element': "Medium",
			'Stats': [
				"Charge: 16",
				"Fill: 17",
				"Bow: 15",
				"Defense: 15",
				"Musou: 18"
			],
			'Stage': "Invasion of Nan Zhong",
			'Requirement': "Wait until the elephant troops charge the camp, you mustn't destroy the bridge beforehand. Then defeat Gan Ning and Jiang Qin."
		}
	],
	'Zuo Ci': [
		{
			'Game': "DW5",
			'Name': "Trump Deck",
			'Rank': 4,
			'Base': 40,
			'Element': "Medium",
			'Stats': [
				"Charge: 15",
				"Fill: 20",
				"Bow: 15",
				"Defense: 15",
				"Musou: 20"
			],
			'Stage': "Battle of Hu Lao Gate (Allied Forces)",
			'Requirement': "Defeat Lu Bu."
		}
	]
};
