import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Sagar Koju. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using React & Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
}