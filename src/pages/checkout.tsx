import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { CartItem } from './cart';
import { results } from '@api/search';

const Checkout: NextPage = () => {
	const [data, setData] = useState<CartItem[]>([]);
	useEffect(() => {
		/*
		Get cart items here
		*/

		const dishes = results.filter((r: any) => r.type === 'dish');
		setData(dishes.map((d: any) => ({ ...d, quantity: 1 })));
	}, []);

	return (
		<div>
			<div className='flex flex-col space-y-4 items-center'>
				<span className='font-extrabold text-4xl text-primary'>Checkout</span>
				<span className='font-medium text-xl'>ETA: 23m</span>
			</div>
			<div className='mt-8 flex flex-col justify-items-center'>
				{data && data.length ? (
					data.map((d) => (
						<div key={d.id}>
							{d.name} x {d.quantity}
						</div>
					))
				) : data ? (
					<span className='font-2xl text-primary font-bold'>No items found</span>
				) : (
					<span className='font-2xl text-primary font-bold'>Loading...</span>
				)}
			</div>
			<span className='text-lg'>Total amount: {data?.map((d) => d.price)?.reduce((a, b) => a + b, 0)}</span>
		</div>
	);
};

export default Checkout;
//TODO: Proper Checkout page