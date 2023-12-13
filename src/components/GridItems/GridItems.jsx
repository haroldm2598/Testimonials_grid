function GridItems(props) {
	const { customStyle, hasQuote, img, name, isGraduate, info, testimonial } =
		props;
	return (
		<section
			className={`${customStyle} relative bg-white min-h-[18rem] min-w-[1rem] p-5 rounded-lg shadow-xl flex flex-col gap-5`}
		>
			<div className=' flex flex-row items-center'>
				{/* profile section */}
				{hasQuote && (
					<h1 className='absolute top-0 left-[20rem] text-9xl opacity-50'>
						&quot;
					</h1>
				)}
				<div className='mr-4'>
					<img className='w-full h-full rounded-full' src={img} alt={name} />
				</div>
				<div>
					<h1 className='opacity-80'>{name}</h1>
					<h2 className='opacity-50'>{isGraduate}</h2>
				</div>
			</div>

			{/* content section */}
			<p className=' font-semibold text-2xl'>{info}</p>
			<p className='opacity-50'>{testimonial}</p>
		</section>
	);
}

export default GridItems;
