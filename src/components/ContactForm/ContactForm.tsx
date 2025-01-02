import { FormEvent } from 'react';
import { Container } from '@/components/Container';
import { Input, TextArea } from '@/components/Form';
import { Button } from '@/components/Button';
import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Container direction="column" gap="md">
        <Input
          label="Name"
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          fullWidth
        />
        
        <Input
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="your.email@example.com"
          required
          fullWidth
        />
        
        <TextArea
          label="Message"
          id="message"
          name="message"
          placeholder="Your message..."
          required
          fullWidth
          rows={5}
        />
        
        <Button type="submit" variant="primary" size="medium" fullWidth>
          Send Message
        </Button>
      </Container>
    </form>
  );
};
