import OnboardingLayout from "./OnboardingLayout";
import compareImage from "/image/onboarding3.png";

export default function Onboarding4() {
  return (
    <OnboardingLayout
      title="Compare Fuel Price"
      image={compareImage}
      description="Compare prices with other Z branches within 30km and get the best deal!"
      page={3}
      totalPages={3}
      next="/SignUp1"
    />
  );
}
