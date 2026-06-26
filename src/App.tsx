import { Route, Routes } from "react-router-dom"

import { SplashGate } from "@/components/SplashGate"
import { ScrollToTop } from "@/components/ScrollToTop"
import SiteLayout from "@/components/SiteLayout"
import BlogPage from "@/pages/BlogPage"
import BlogPostPage from "@/pages/BlogPostPage"
import CommunityPage from "@/pages/CommunityPage"
import HomePage from "@/pages/HomePage"
import PrivacyPage from "@/pages/PrivacyPage"
import QuizPage from "@/pages/QuizPage"
import ShopPage from "@/pages/ShopPage"
import TermsPage from "@/pages/TermsPage"

export default function App() {
  return (
    <SplashGate>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </SplashGate>
  )
}
