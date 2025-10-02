
import yargs from 'yargs'; 
import chalk from 'chalk';
import { convertTemperature } from './helpers/convert.js'; 



const yargsInstance = yargs(process.argv.slice(2));



const argv = yargsInstance
    
    .option('temp', {
        alias: 't',
        description: 'Valor numérico de la temperatura a convertir',
        type: 'number',
    })
    .option('unidad', {
        alias: 'u',
        description: 'Unidad de la temperatura original ("c" o "f")',
        type: 'string',
    })
    
    .demandOption(['temp', 'unidad'], chalk.red('❌ ERROR: Los parámetros --temp (temperatura) y --unidad (c/f) son obligatorios.'))
    .help()
    .alias('help', 'h')
    .parse(); 


const temp = argv.temp;
const unidad = argv.unidad;

if (isNaN(temp)) {
    console.error(chalk.red(`❌ ERROR: El valor de --temp debe ser un número válido, pero se recibió: "${temp}".`));
    process.exit(1);
}

try {
    const resultado = convertTemperature(temp, unidad);
    
    console.log(chalk.green(`\n✅ CONVERSIÓN EXITOSA:`));
    console.log(chalk.green.bold(resultado));
    console.log('\n');

} catch (error) {
    if (error.message.includes('Unidad inválida')) {
        console.warn(chalk.yellow(`\n⚠️ ADVERTENCIA: ${error.message}`));
        console.warn(chalk.yellow('Por favor, usa --unidad c o --unidad f.\n'));
    } else {
        console.error(chalk.red(`\n❌ ERROR INESPERADO: ${error.message}\n`));
    }
    process.exit(1);
}