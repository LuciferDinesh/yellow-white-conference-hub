
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import CallForPapersPage from "./pages/CallForPapersPage";
import RegistrationPage from "./pages/RegistrationPage";
import CommitteesPage from "./pages/CommitteesPage";
import ContactPage from "./pages/ContactPage";
import SubmissionFormPage from "./pages/SubmissionFormPage";
import RegistrationFormPage from "./pages/RegistrationFormPage";
import TestDatabasePage from "./pages/TestDatabasePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/call-for-papers" element={<CallForPapersPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/committees" element={<CommitteesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/submission-form" element={<SubmissionFormPage />} />
          <Route path="/registration-form" element={<RegistrationFormPage />} />
          <Route path="/test-database" element={<TestDatabasePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
