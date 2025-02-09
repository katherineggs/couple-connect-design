
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { EnvelopeIntro } from "@/components/EnvelopeIntro";
import { CountdownTimer } from "@/components/CountdownTimer";
import { EventInfo } from "@/components/EventInfo";
import { RsvpForm } from "@/components/RsvpForm";
import { GiftSection } from "@/components/GiftSection";
import { DressCode } from "@/components/DressCode";
import { Accommodations } from "@/components/Accommodations";

const Index = () => {
  return (
    <div className="min-h-screen bg-wedding-cream">
      <WelcomeScreen />
      <EnvelopeIntro />
      <CountdownTimer />
      <EventInfo />
      <Accommodations />
      <RsvpForm />
      <GiftSection />
      <DressCode />
    </div>
  );
};

export default Index;
