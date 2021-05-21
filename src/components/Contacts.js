
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

export default function Contact() {
	const [successMessage, setSuccessMessage] = useState('');
	const { register, handleSubmit, formState: { errors } } = useForm();

	const serviceID = "service_gomll4j";
     const templateID = "template_o2wp8a2";
     const userID = "user_ePdkTgGI0hOk9MVCkPvQC"

	const onSubmit = (data, r) => {
		sendEmail(
			serviceID,
			templateID,
			{
				name: data.name,
				phone: data.phone,
				email: data.email,
				subject: data.subject,
				description: data.description,
			},
			userID
		)
		r.target.reset();

	}


const sendEmail = (serviceID, templateID, variables, userID) => {

	emailjs
		.send(serviceID, templateID, variables, userID)
		.then(() => {
			setSuccessMessage(
				"Your message was successfully sent!  I'll contact you as soon as possible."
			);
		})
		.catch(err => console.error(`Something went wrong ${err}`));
};

   return (
		<div id='contact' className='contacts'>
			<div className='text-center'>
				<h1>contact me</h1>
				<p>
					For queries, suggestions.....
				</p>
				<span className='success-message'>{successMessage}</span>
			</div>
			<div className='container'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='row'>
						<div className='col-md-6 col-xs-12'>
							<div className='text-center'>
								<input
									className='form-control'
									type='text'
									placeholder='First and last name'
									// name='name'
									{...register("name",{
										required: 'First and last name are required!',
										pattern: {
											value: /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/i,
											message: 'Invalid First and Last Name!',
										},
									})}
								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.name && errors.name.message}
							</span>

							<div className='text-center'>
								<input
									className='form-control'
									type='text'
									placeholder='Phone number'
									// name='phone'
									{...register("phone",{
										required: 'Phone number is required!',
										pattern: {
											value: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/i,
											message: 'Invalid Phone Number!',
										},
									})}
								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.phone && errors.phone.message}
							</span>

							<div className='text-center'>
								<input
									className='form-control'
									type='email'
									placeholder='Email'
									// name='email'
									{...register("email",{
										required: 'Email address is required!',
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'Invalid Email Address!',
										},
									})}
								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.email && errors.email.message}
							</span>

							<div className='text-center'>
								<input
									className='form-control'
									type='text'
									placeholder='Subject'
									// name='subject'
									{...register("subject",{
										required: 'A Subject is required!',
									})}
								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.subject && errors.subject.message}
							</span>
						</div>

						<div className='col-md-6 col-xs-12'>
							<div className='text-center'>
								<textarea
									className='form-control'
									type='text'
									placeholder='Brief Message'
									// name='description'
									{...register("description",{
										required: 'A Brief Message is required!',
										minLength: {
											value: 10,
											message:
												'Your message must be at least 10 characters!',
										},
									})}
								></textarea>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.description && errors.description.message}
							</span>
							<button
								className='btn-main-offer contact-btn'
								type='submit'
							>
								send message
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};