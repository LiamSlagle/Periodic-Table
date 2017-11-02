var elements = [
	{num: "1", sym: "H", name: "Hydrogen", weight: "1.01"},
	{num: "2", sym: "He", name: "Helium", weight: "4.01"},
	{num: "3", sym: "Li", name: "Lithium", weight: "6.94"},
	{num: "4", sym: "Be", name: "Beryllium", weight: "9.01"},
	{num: "5", sym: "B", name: "Boron", weight: "10.81"},
	{num: "6", sym: "C", name: "Carbon", weight: "28.09"},
	{num: "7", sym: "N", name: "Nitrogen", weight: "14.01"},
	{num: "8", sym: "O", name: "Oxygen", weight: "15.99"},
	{num: "9", sym: "F", name: "Flourine", weight: "18.99"},
	{num: "10", sym: "Ne", name: "Neon", weight: "20.18"},
	{num: "11", sym: "Na", name: "Sodium", weight: "22.99"},
	{num: "12", sym: "Mg", name: "Magnesium", weight: "24.305"},
	{num: "13", sym: "Al", name: "Aluminum", weight: "26.98"},
	{num: "14", sym: "Si", name: "Silicon", weight: "28.08"},
	{num: "15", sym: "P", name: "Phosphorous", weight: "30.97"},
	{num: "16", sym: "S", name: "Sulfur", weight: "32.06"},
	{num: "17", sym: "Cl", name: "Chlorine", weight: "35.45"},
	{num: "18", sym: "Ar", name: "Argon", weight: "39.94"},
	{num: "19", sym: "K", name: "Potassium", weight: "39.09"},
	{num: "20", sym: "Ca", name: "Calcium", weight: "40.07"},
	{num: "21", sym: "Sc", name: "Scandium", weight: "44.95"},
	{num: "22", sym: "Ti", name: "Titanium", weight: "47.87"},
	{num: "23", sym: "V", name: "Vanadium", weight: "50.94"},
	{num: "24", sym: "Cr", name: "Chromium", weight: "51.99"},
	{num: "25", sym: "Mn", name: "Manganese", weight: "54.93"},
	{num: "26", sym: "Fe", name: "Iron", weight: "55.84"},
	{num: "27", sym: "Co", name: "Cobalt", weight: "58.93"},
	{num: "28", sym: "Ni", name: "Nickel", weight: "58.69"},
	{num: "29", sym: "Cu", name: "Copper", weight: "63.54"},
	{num: "30", sym: "Zn", name: "Zinc", weight: "65.38"},
	{num: "31", sym: "Ga", name: "Gallium", weight: "69.72"},
	{num: "32", sym: "Ge", name: "Germanium", weight: "72.63"},
	{num: "33", sym: "As", name: "Arsenic", weight: "74.92"},
	{num: "34", sym: "Se", name: "Selenium", weight: "79.97"},
	{num: "35", sym: "Br", name: "Bromine", weight: "79.90"},
	{num: "36", sym: "Kr", name: "Krypton", weight: "83.79"},
	{num: "37", sym: "Rb", name: "Rubidium", weight: "85.46"},
	{num: "38", sym: "Sr", name: "Strontium", weight: "87.62"},
	{num: "39", sym: "Y", name: "Yttrium", weight: "88.91"},
	{num: "40", sym: "Zr", name: "Zirconium", weight: "91.22"},
	{num: "41", sym: "Nb", name: "Niobium", weight: "92.91"},
	{num: "42", sym: "Mo", name: "Molybdenur", weight: "95.95"},
	{num: "43", sym: "Tc", name: "Technetium", weight: "(98)"},
	{num: "44", sym: "Ru", name: "Ruthenium", weight: "101.07"},
	{num: "45", sym: "Rh", name: "Rhoduim", weight: "102.91"},
	{num: "46", sym: "Pd", name: "Palladium", weight: "106.42"},
	{num: "47", sym: "Ag", name: "Silver", weight: "107.97"},
	{num: "48", sym: "Cd", name: "Cadmium", weight: "112.41"},
	{num: "49", sym: "In", name: "Indium", weight: "114.82"},
	{num: "50", sym: "Sn", name: "Tin", weight: "118.71"},
	{num: "51", sym: "Sb", name: "Antimony", weight: "121.76"},
	{num: "52", sym: "Te", name: "Tellurium", weight: "127.60"},
	{num: "53", sym: "I", name: "Iodine", weight: "126.90"},
	{num: "54", sym: "Xe", name: "Xenon", weight: "131.29"},
	{num: "55", sym: "Cs", name: "Caesium", weight: "132.91"},
	{num: "56", sym: "Ba", name: "Barium", weight: "137.33"},
	{num: "57", sym: "La", name: "Lanthanum", weight: "138.91"},
	{num: "58", sym: "Ce", name: "Cerium", weight: "140.12"},
	{num: "59", sym: "Pr", name: "Praseodymium", weight: "140.91"},
	{num: "60", sym: "Nd", name: "Neodymium", weight: "144.24"},
	{num: "61", sym: "Pm", name: "Promethium", weight: "(145)"},
	{num: "62", sym: "Sm", name: "Samarium", weight: "150.36"},
	{num: "63", sym: "Eu", name: "Europium", weight: "151.96"},
	{num: "64", sym: "Gd", name: "Gadolinium", weight: "157.25"},
	{num: "65", sym: "Tb", name: "Terbium", weight: "158.93"},
	{num: "66", sym: "Dy", name: "Dysprosium", weight: "162.50"},
	{num: "67", sym: "Ho", name: "Holmium", weight: "164.93"},
	{num: "68", sym: "Er", name: "Erbium", weight: "167.26"},
	{num: "69", sym: "Tm", name: "Thulium", weight: "168.93"},
	{num: "70", sym: "Yb", name: "Ytterbium", weight: "173.05"},
	{num: "71", sym: "Lu", name: "Lutetium", weight: "174.97"},
	{num: "72", sym: "Hf", name: "Hafnium", weight: "178.49"},
	{num: "73", sym: "Ta", name: "Tantalum", weight: "180.95"},
	{num: "74", sym: "W", name: "Tungsten", weight: "183.84"},
	{num: "75", sym: "Re", name: "Rhenium", weight: "186.21"},
	{num: "76", sym: "Os", name: "Osmium", weight: "190.23"},
	{num: "77", sym: "Ir", name: "Iridium", weight: "192.22"},
	{num: "78", sym: "Pt", name: "Platinum", weight: "195.08"},
	{num: "79", sym: "Au", name: "Gold", weight: "196.97"},
	{num: "80", sym: "Hg", name: "Mercury", weight: "200.59"},
	{num: "81", sym: "Tl", name: "Thallium", weight: "204.38"},
	{num: "82", sym: "Pb", name: "Lead", weight: "207.20"},
	{num: "83", sym: "Bi", name: "Bismuth", weight: "208.98"},
	{num: "84", sym: "Po", name: "Polonium", weight: "(209)"},
	{num: "85", sym: "At", name: "Astatine", weight: "(210)"},
	{num: "86", sym: "Rn", name: "Radon", weight: "(222)"},
	{num: "87", sym: "Fr", name: "Francium", weight: "(223)"},
	{num: "88", sym: "Ra", name: "Radium", weight: "(226)"},
	{num: "89", sym: "Ac", name: "Actinium", weight: "(227)"},
	{num: "90", sym: "Th", name: "Thorium", weight: "232.04"},
	{num: "91", sym: "Pa", name: "Protactinium", weight: "231.04"},
	{num: "92", sym: "U", name: "Uranium", weight: "238.03"},
	{num: "93", sym: "Np", name: "Neptunium", weight: "(237)"},
	{num: "94", sym: "Pu", name: "Plutonium", weight: "(244)"},
	{num: "95", sym: "Am", name: "Americium", weight: "(243)"},
	{num: "96", sym: "Cm", name: "Curium", weight: "(247)"},
	{num: "97", sym: "Bk", name: "Berkelium", weight: "(247)"},
	{num: "98", sym: "Cf", name: "Californium", weight: "(251)"},
	{num: "99", sym: "Es", name: "Einsteinium", weight: "(252)"},
	{num: "100", sym: "Fm", name: "Fermium", weight: "(257)"},
	{num: "101", sym: "Md", name: "Mendelevium", weight: "(258)"},
	{num: "102", sym: "No", name: "Nobelium", weight: "(259)"},
	{num: "103", sym: "Lr", name: "Lawrencium", weight: "(266)"},
	{num: "104", sym: "Rf", name: "Rutherfordium", weight: "(267)"},
	{num: "105", sym: "Db", name: "Dubnium", weight: "(268)"},
	{num: "106", sym: "Sg", name: "Seaborgium", weight: "(269)"},
	{num: "107", sym: "Bh", name: "Bohrium", weight: "(270)"},
	{num: "108", sym: "Hs", name: "Hassium", weight: "(277)"},
	{num: "109", sym: "Mt", name: "Meitnerium", weight: "(278)"},
	{num: "110", sym: "Ds", name: "Darmstadium", weight: "(281)"},
	{num: "111", sym: "Rg", name: "Roentgenium", weight: "(282)"},
	{num: "112", sym: "Cn", name: "Copernicium", weight: "(285)"},
	{num: "113", sym: "Nh", name: "Nihonium", weight: "(286)"},
	{num: "114", sym: "Fl", name: "Flerovium", weight: "(289)"},
	{num: "115", sym: "Mc", name: "Moscovium", weight: "(290)"},
	{num: "116", sym: "Lv", name: "Livermomium", weight: "(293)"},
	{num: "117", sym: "Ts", name: "Tennessine", weight: "(294)"},
	{num: "118", sym: "Og", name: "Oganesson", weight: "(294)"},
];

var elementInfo = new Vue({
	el: "#wrapper",

	data: {
		atomicNumber: "1",
		atomicSymbol: "H",
		atomicName:   "Hydrogen",
		atomicWeight: "1.01"	
	},

	methods: {
		updateInfo: function(x) {
			this.atomicNumber = elements[x - 1].num;
			this.atomicSymbol = elements[x - 1].sym;
			this.atomicName   = elements[x - 1].name;
			this.atomicWeight = elements[x - 1].weight;

			$("#group-wrapper div").filter(function() {
				return $(this).css("border-color") != $("body").css("background-color");
			}).css("border-color", $("body").css("background-color"));

			var bgc = $(".cell").filter(function() {
				return $(this).text() === elements[x - 1].sym;

			}).css("background-color");
			$("#element-large").css("background-color", bgc);

			$("#group-wrapper div").filter(function() {
				return $(this).css("background-color") == bgc;
			}).css("border-color", "#555555");
		}
	}
});