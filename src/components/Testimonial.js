import React from 'react';
import TestimonialCarousel from './TestimonialsCarousel';

export default function Testimonial() {
   return (
		<div id='testimonials' className='testimonials'>
			<h1>Testimonials</h1>
			<div className='container'>
				<div className='testimonials-content'>
					<TestimonialCarousel />
				</div>
			</div>
		</div>
	);
};