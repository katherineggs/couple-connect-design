
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { CountdownTimer } from "@/components/CountdownTimer";
import { EventInfo } from "@/components/EventInfo";
import { RsvpForm } from "@/components/RsvpForm";
import { GiftSection } from "@/components/GiftSection";
import { DressCode } from "@/components/DressCode";

const Index = () => {
  return (
    <div className="min-h-screen bg-wedding-cream">
      <WelcomeScreen />
      <CountdownTimer />
      <EventInfo />
      <RsvpForm />
      <GiftSection />
      <DressCode />
    </div>
  );
};

export default Index;
