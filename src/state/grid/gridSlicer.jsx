import { createSlice } from '@reduxjs/toolkit';

import image1 from '../../assets/images/image-daniel.jpg';
import image2 from '../../assets/images/image-jonathan.jpg';
import image3 from '../../assets/images/image-jeanette.jpg';
import image4 from '../../assets/images/image-patrick.jpg';
import image5 from '../../assets/images/image-kira.jpg';

const initialState = {
	value: 0,
	data: [
		{
			customStyle: 'row-start-1 md:col-span-2 md:row-span-1 firstGrid',
			hasQuote: true,
			image: image1,
			name: 'Daniel Clifford',
			isGraduate: 'Verified Graduate',
			info: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
			testimonial:
				'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.'
		},
		{
			customStyle: 'row-start-2 md:col-span-1 md:row-span-1 secondGrid',
			hasQuote: false,
			image: image2,
			name: 'Jonathan Walters',
			isGraduate: 'Verified Graduate',
			info: 'The team was very supportive and kept me motivated',
			testimonial:
				'I started as a total newbie with virtually no coding skills. I now work as a mobile engineer  for a big company. This was one of the best investments I’ve made in myself.'
		},
		{
			customStyle:
				' row-start-3 md:col-span-1 md:row-span-1 md:row-start-2 thirdGrid',
			hasQuote: false,
			image: image3,
			name: 'Jeanette Harmon',
			isGraduate: 'Verified Graduate',
			info: 'An overall wonderful and rewarding experience',
			testimonial:
				'Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.'
		},
		{
			customStyle: ' row-start-4 md:col-span-2 md:row-span-1 fourthGrid',
			hasQuote: false,
			image: image4,
			name: 'Patrick Abrams',
			isGraduate: 'Verified Graduate',
			info: 'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and  learning from their experiences was easy.',
			testimonial:
				'The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.'
		},
		{
			customStyle:
				' row-start-5 md:col-span-1 md:row-span-2 md:col-start-4 md:col-end-5 md:row-start-1 fifthGrid',
			hasQuote: false,
			image: image5,
			name: 'Kira Whittle',
			isGraduate: 'Verified Graduate',
			info: 'Such a life-changing experience. Highly recommended!',
			testimonial:
				'Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! '
		}
	]
};

const gridSlice = createSlice({
	name: 'gridSlicer',
	initialState,
	reducers: {
		getAmount: (state, action) => {
			state.value = action.payload;
		}
	}
});

export const { getAmount } = gridSlice.actions;

export default gridSlice.reducer;
