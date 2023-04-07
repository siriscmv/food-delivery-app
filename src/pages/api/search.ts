import type { NextApiRequest, NextApiResponse } from 'next';
import { cuisines } from '../explore';

export interface RestaurantItem {
	id: string;
	type: 'restaurant';
	about: string;
	name: string;
	distance: number;
}

export interface DishItem {
	id: string;
	resturantId: string;
	type: 'dish';
	name: string;
	allergens: string[];
	price: number;
}

export type SearchItem = RestaurantItem | DishItem;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const query = req.query.q as string;

	if (cuisines.map((c) => c.title.toLowerCase()).includes(query)) {
		// TODO: Search for restaurants with the given cuisine
	}

	res.status(200).json({ results });
}

//TODO: Search for the query in the database

// Mock data
const results: SearchItem[] = [
	{
		id: '1',
		type: 'restaurant',
		name: 'Restaurant 1',
		about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		distance: 1.5
	},
	{
		id: '2',
		type: 'restaurant',
		name: 'Restaurant 2',
		about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		distance: 2.5
	},
	{
		id: '3',
		resturantId: '1',
		type: 'dish',
		name: 'Dish 1',
		allergens: ['gluten', 'nuts'],
		price: 5
	},
	{
		id: '4',
		resturantId: '2',
		type: 'dish',
		name: 'Dish 2',
		allergens: [],
		price: 10
	}
];
