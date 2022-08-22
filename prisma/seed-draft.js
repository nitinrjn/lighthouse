const { PrismaClient } = require('@prisma/client');
const { UserSample } = require('./sampleData.js');
const prisma = new PrismaClient();

const load = async () => {
    try {
        await prisma.user.deleteMany();
        console.log("Deleted records in user table");

        await prisma.user.create({
            data: UserSample
        })
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}