// Seed the database with some data

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	// await prisma.user.create({
	// 	data: {
	// 		name: 'John Doe',
	// 		email: 'johndoe@gmail.com',
	// 		password: 'password',
	// 		image: 'https://i.pravatar.cc/150'
	// 	}
	// });

	// await prisma.user.create({
	// 	data: {
	// 		name: 'Jane Doe',
	// 		email: 'janedoe@gmail.com',
	// 		password: 'password',
	// 		image: 'https://i.pravatar.cc/150'
	// 	}
	// });

	await prisma.recipe.create({
		data: {
			author: {
				create: {
					name: 'Jane Doe',
					email: 'janedoe@gmail.com',
					password: 'password',
					image: 'https://i.pravatar.cc/150'
				}
			},
			title: 'Spaghetti Bolognese',
			content: 'A delicious Italian dish. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'A delicious Italian dish',
			published: true,
			ingredients: {
				create: [
					{
						name: 'Spaghetti',
						quantity: '500g'
					},
					{
						name: 'Tomatoes',
						quantity: '500g'
					},
					{
						name: 'Minced Meat',
						quantity: '500g'
					}
				]
			},
			steps: [
				{
					description: 'Boil the spaghetti'
				},
				{
					description: 'Cook the meat'
				},
				{
					description: 'Mix the tomatoes with the meat'
				},
				{
					description: 'Serve'
				}
			],
			servings: 4,
			time: '30 minutes',
			difficulty: 'EASY',
			category: {
				create: {
					name: 'Pasta'
				}
			},
			tags: {
				create: [
					{
						name: 'Pasta'
					},
					{
						name: 'Meat'
					}
				]
			},
			tips: [
				{
					0: 'Add some cheese',
					1: 'Add some salt',
					2: 'Add some pepper'
				}
			]
		}
	});

	await prisma.recipe.create({
		data: {
			author: {
				create: {
					name: 'Jane Doe',
					email: 'janedoe@gmail.com',
					password: 'password',
					image: 'https://i.pravatar.cc/150'
				}
			},
			title: 'Pizza',
			content: 'A delicious Italian dish. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'A delicious Italian dish',
			published: true,
			ingredients: {
				create: [
					{
						name: 'Flour',
						quantity: '500g'
					},
					{
						name: 'Tomatoes',
						quantity: '500g'
					},
					{
						name: 'Cheese',
						quantity: '500g'
					},
					{
						name: 'Pepperoni',
						quantity: '500g'
					}
				]
			},
			steps: [
				{
					description: 'Mix the flour with water'
				},
				{
					description: 'Add the tomatoes and cheese'
				},
				{
					description: 'Add the pepperoni'
				},
				{
					description: 'Bake in the oven'
				},
				{
					description: 'Serve'
				}
			],
			servings: 4,
			time: '30 minutes',
			difficulty: 'EASY',
			category: {
				create: {
					name: 'Pizza'
				}
			},
			tags: {
				create: [
					{
						name: 'Pizza'
					},
					{
						name: 'Cheese'
					}
				]
			},
			tips: [
				{
					0: 'Add some cheese',
					1: 'Add some salt',
					2: 'Add some pepper'
				}
			]
		}
	});

	// await prisma.category.createMany({
	// 	data: [
	// 		{
	// 			name: 'Italian'
	// 		},
	// 		{
	// 			name: 'Mexican'
	// 		},
	// 		{
	// 			name: 'Chinese'
	// 		},
	// 		{
	// 			name: 'Indian'
	// 		},
	// 		{
	// 			name: 'Japanese'
	// 		},
	// 		{
	// 			name: 'American'
	// 		}
	// 	]
	// });
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
