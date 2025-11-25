import OnboardingLayout from "./OnboardingLayout";
import sharetankImage from "/image/onboarding2.png";

export default function Onboarding3() {
  return (
    <OnboardingLayout
      title="Sharetank"
      image={sharetankImage}
      description="Lock the lowest pump price within 30km and share fuel up to 5 others"
      page={2}
      totalPages={3}
      next="/onboarding4"
    />
  );
}
