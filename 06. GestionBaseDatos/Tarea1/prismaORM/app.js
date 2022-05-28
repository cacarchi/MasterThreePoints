//importamos el constructor prisma/client
const {PrismaClient} = require ('@prisma/client')
//creamos una instancia de PrismaClient
const prisma = new PrismaClient()
//funcion asincrona para enviar consultas a la BD
async function main () {
    //mostrar todos los registros
    // const countries = await prisma.country.findMany()
    // console.log(countries)
    //mostrar un registro
    const country = await prisma.country.findUnique({
            where: {
                country_id:10
            }
        }
    )
    console.log(country)
}
//Llamamos a la funcion principal
main()
    //errores posibles
    .catch( (e) => {
        throw e
    })
    //al final se cierra la conexiòn con la base de datos cuando finalice el script
    .finally(async () => {
        await prisma.$disconnect()
    })
