import OnboardingLayout from "./OnboardingLayout";
import coffeeImage from "/image/onboarding1.png";

export default function Onboarding2() {
  return (
    <OnboardingLayout
      title="Order coffee"
      image={coffeeImage}
      description="Order your coffee from the best comfort zone of you"
      page={1}
      totalPages={3}
      next="/onboarding3"
    />
  );
}
