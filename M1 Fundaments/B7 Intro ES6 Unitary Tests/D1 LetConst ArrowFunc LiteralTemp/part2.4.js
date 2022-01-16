let mainSkills = ['HTML', 'CSS', 'JavaScript', 'Python', 'Programing Logic'];

let string = 'Tryber x aqui';

const looking4X = (param1) => {
for (let i = 0; i < string.length; i += 1){
	if(string[i] === 'x'){
		let x = string[i];
		x = param1;
		console.log(`${string}${x}`);
	}
}
};
looking4X('bebeto');
