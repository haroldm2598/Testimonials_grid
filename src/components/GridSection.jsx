import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import GridItems from './GridItems/GridItems';

function GridSection() {
	const { data } = useSelector((state) => state.gridTemplate);

	return (
		<main className='grid grid-cols-1 md:grid-cols-4 gap-4'>
			{data?.map((item, index) => (
				<Fragment key={index}>
					<GridItems
						customStyle={item.customStyle}
						hasQuote={item.hasQuote}
						img={item.image}
						name={item.name}
						isGraduate={item.isGraduate}
						info={item.info}
						testimonial={item.testimonial}
					/>
				</Fragment>
			))}
		</main>
	);
}

export default GridSection;
