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
	]
};
