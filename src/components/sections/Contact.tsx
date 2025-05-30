import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import { FormData } from '../../types';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit,
    reset,
    formState: { errors, isSubmitting } 
  } = useForm<FormData>();

 const onSubmit = async (data: FormData) => {
  try {
    const response = await fetch('https://hook.eu2.make.com/sqk5s6ly6di1ihcmyk33l8o2s310reim', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('Network response was not ok');

    setIsSubmitted(true);
    reset();
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-primary-600 dark:from-secondary-400 dark:to-primary-400">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or interested in working together? Fill out the form below, and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 dark:bg-green-900/30 rounded-lg p-8 text-center"
            >
              <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-green-600 dark:text-green-400 mb-4">
                Thank you for reaching out. I'll respond to your message as soon as possible.
              </p>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <div className="mb-6">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="input"
                  placeholder="John Doe"
                  {...register('name', { 
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters',
                    },
                  })}
                />
                {errors.name && (
                  <p className="form-error">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="input"
                  placeholder="you@example.com"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="form-error">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="input"
                  placeholder="Tell me about your project..."
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters',
                    },
                  })}
                ></textarea>
                {errors.message && (
                  <p className="form-error">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
                icon={<Send size={18} />}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;