import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const Hero = () => {
  const handleChatClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden" aria-label="Hero section">
      <div className="absolute inset-0 bg-gradient-to-b from-muted to-transparent" role="presentation" />
      <div className="container mx-auto text-center relative z-10">
        <motion.span initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full" role="text">Hi there! 👋 We're heartcode</motion.span>
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Let's bring your vision to life{" "}
          <span className="text-primary">together</span>
        </motion.h1>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We're not just another agency – we're your dedicated partners in creating meaningful digital experiences that resonate with your audience and grow your business.
        </motion.p>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full w-full sm:w-auto" onClick={handleChatClick} aria-label="Start chat">
            Let's Chat ☕️
          </Button>
          <Link to="/our-work" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto" aria-label="View our work">
              See Our Work
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>;
};