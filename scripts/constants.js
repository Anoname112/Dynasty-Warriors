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
			'Requirement': "Defeat Xiahou Mao and receive Nan An Castle; also defeat Cui Liang and receive An Ding Castle. Wait for Jiang Wei's 'I must return to Tian Shui Castle' message, and defeat him before he gets to Tian Shui Castle."
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
	'Huang Zhong': [
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
	'Wei Yan': [
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
	'Guan Ping': [
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
	'Pang Tong': [
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
	'Yue Ying': [
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
	'Jiang Wei': [
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
	'Xing Cai': [
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
	'Xiahou Dun': [
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
	'Dian Wei': [
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
	'Zhang Liao': [
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
	'Cao Cao': [
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
	'Xu Zhu': [
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
	'Xiahou Yuan': [
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
	'Xu Huang': [
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
	'Zhang He': [
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
	'Cao Ren': [
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
	'Cao Pi': [
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
	'Zhen Ji': [
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
	'Pang De': [
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
	'Zhou Yu': [
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
	'Lu Xun': [
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
	'Sun Shang Xiang': [
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
	'Gan Ning': [
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
	'Sun Jian': [
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
	'Taishi Ci': [
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
	'Lu Meng': [
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
	'Huang Gai': [
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
	'Zhou Tai': [
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
	'Ling Tong': [
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
	'Sun Ce': [
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
	'Sun Quan': [
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
	'Xiao Qiao': [
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
	'Da Qiao': [
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
	'Sima Yi': [
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
	'Diao Chan': [],
	'Lu Bu': [],
	'Dong Zhuo': [],
	'Yuan Shao': [],
	'Zhang Jiao': [],
	'Meng Huo': [],
	'Zhu Rong': [],
	'Zuo Ci': []
};
