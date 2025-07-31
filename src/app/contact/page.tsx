import { ContactForm } from './ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="w-full max-w-2xl">
        <div 
          className="bg-card/50 p-8 sm:p-12 rounded-lg border border-border shadow-2xl relative"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        >
          <div className="text-center mb-8">
            <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tighter">Reach Out</h1>
            <p className="text-muted-foreground mt-2">Let's craft a new realm together.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
