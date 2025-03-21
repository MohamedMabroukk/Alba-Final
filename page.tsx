import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Award,
  Clock,
  BookOpen,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import RegistrationForm from "@/components/registration-form"
import Quiz from "@/components/quiz"
import LanguageSwitcher from "@/components/language-switcher"
import Chatbot from "@/components/chatbot"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">Alba</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#hero" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#modules" className="text-sm font-medium hover:text-primary">
              Modules
            </Link>
            <Link href="#advantages" className="text-sm font-medium hover:text-primary">
              Why Alba
            </Link>
            <Link href="#certification" className="text-sm font-medium hover:text-primary">
              Certification
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <div className="hidden md:flex items-center gap-2 border-l pl-2 ml-2">
              <Phone className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium">Emergency: 103</span>
            </div>
            <Button variant="outline" className="hidden md:flex">
              Log In
            </Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white">Enroll Now</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-red-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-red-500 hover:bg-red-500/90">Life-Saving Skills</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Save Lives – Learn First Aid!
                  </h1>
                  <p className="text-xl text-muted-foreground md:text-2xl">
                    Free Basic Course and Premium First Aid Programs – Accessible, Interactive, Professional!
                  </p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  In an emergency, every second counts. The 'Alba' platform is designed to help you master essential
                  first aid skills that can save lives. Our courses are developed by leading medical experts and are
                  available online anytime, anywhere. Enroll now and become confident in your ability to act decisively
                  when it matters most!
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-red-500 hover:bg-red-600 text-white" size="lg">
                    Start Learning Now – Enroll!
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-red-500" />
                  <span>
                    For emergencies, call <strong>103</strong>
                  </span>
                </div>
              </div>
              <Image
                src="/images/emergency-responders.png"
                width={550}
                height={550}
                alt="Emergency responders providing first aid"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why It Matters</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Many people today lack the vital skills required to provide first aid, leading to critical mistakes
                  during emergencies. Traditional courses are often expensive, geographically inaccessible, and do not
                  offer interactive, hands-on practice. This issue is particularly acute in remote regions of
                  Kazakhstan, where access to modern training is limited. The 'Alba' platform addresses this gap by
                  offering a comprehensive, accessible, and practical first aid course that can be taken online or at
                  our dedicated training centers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About the Course Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Course – Your Reliable Lifesaver
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  The 'Alba' platform presents a unique first aid training program that combines:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-red-500 mt-0.5" />
                    <div>
                      <strong>Interactive Video Lessons:</strong> Step-by-step guidance on performing CPR, controlling
                      bleeding, treating burns, poisonings, and other emergency scenarios.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-red-500 mt-0.5" />
                    <div>
                      <strong>Practical Simulations:</strong> Realistic virtual scenarios to practice your skills
                      safely.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-red-500 mt-0.5" />
                    <div>
                      <strong>Quizzes and Assessments:</strong> Tools to reinforce your knowledge and ensure you are
                      prepared to act during emergencies.
                    </div>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Our course is perfect for beginners as well as those who want to deepen their expertise and become
                  confident first responders. All content is developed in collaboration with the KazNMU Simulation
                  Center, clinical professionals, and renowned medical experts.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="First Aid Course"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Course Modules Section */}
        <section id="modules" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What You Will Learn</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our course is structured into several modules, each focusing on a key aspect of first aid:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-4 md:gap-8">
                <div className="flex items-start gap-4 rounded-lg border p-4 md:p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold">Cardiopulmonary Resuscitation (CPR) & AED Usage</h3>
                    <p className="text-sm text-muted-foreground">
                      Master the techniques of chest compressions, rescue breathing, and using an automated external
                      defibrillator.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-4 md:p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold">Bleeding Control & Wound Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Understand how to stop bleeding using direct pressure, bandages, tourniquets, and pressure
                      techniques.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-4 md:p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold">First Aid for Loss of Consciousness</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn actions in case of fainting and how to place the victim in a stable side position.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:gap-8">
                <div className="flex items-start gap-4 rounded-lg border p-4 md:p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold">First Aid for Choking</h3>
                    <p className="text-sm text-muted-foreground">
                      Master the Heimlich maneuver and appropriate actions for children and adults with foreign object
                      airway obstruction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-4 md:p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold">First Aid for Burns</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn proper techniques for cooling affected areas and avoid common mistakes in burn treatment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-4 md:p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold">Response to Poisonings & Allergic Reactions</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn to act fast and correctly during a range of emergency situations involving poisoning and
                      severe allergic reactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="max-w-[900px] text-center text-muted-foreground">
                Each module features detailed videos, interactive assignments, and practical tests designed to ensure
                you gain real-world skills.
              </p>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section id="quiz" className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Test Your First Aid Knowledge
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take our quick quiz to see how much you know about basic first aid procedures. This will help you
                  identify areas where you might need more training.
                </p>
              </div>
            </div>
            <Quiz />
          </div>
        </section>

        {/* Certification Section */}
        <section id="certification" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Official Certification</h2>
                <p className="text-muted-foreground md:text-xl">
                  Upon completion of the course, you will receive an official certificate issued by our institution,
                  confirming that you have successfully mastered all key skills for first aid. This certificate serves
                  not only as a recognition of your knowledge, but also as a guarantee of the high quality of training
                  provided by our platform.
                </p>
                <p className="text-muted-foreground md:text-xl">
                  The certificate can be used for professional growth and further development in the field of first aid.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <Award className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Recognized by Medical Professionals</h3>
                    <p className="text-sm text-muted-foreground">
                      Our certification is developed in partnership with KazNMU and recognized by medical institutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg blur opacity-25"></div>
                  <div className="relative">
                    <Image
                      src="/images/certificate.png"
                      width={800}
                      height={600}
                      alt="Alba First Aid Certificate"
                      className="rounded-xl object-cover border-2 border-gray-200 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Advantages Section */}
        <section id="advantages" className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Alba?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  'Alba' is an innovative online platform designed to deliver first aid training with maximum
                  efficiency:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pt-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Clock className="h-8 w-8 text-red-500" />
                  <CardTitle>24/7 Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Learn at your own pace, anywhere and anytime.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Users className="h-8 w-8 text-red-500" />
                  <CardTitle>Personalized Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our AI-driven system tailors your learning experience based on your progress and needs.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Award className="h-8 w-8 text-red-500" />
                  <CardTitle>Gamification Elements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Earn achievements, participate in challenges, and climb leaderboards to keep you motivated.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <BookOpen className="h-8 w-8 text-red-500" />
                  <CardTitle>Practical Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Benefit from real-life case studies, interactive simulations, and immediate expert feedback.</p>
                </CardContent>
              </Card>
              <Card className="md:col-span-2 lg:col-span-1">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Users className="h-8 w-8 text-red-500" />
                  <CardTitle>Trusted Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our courses are created in collaboration with KazNMU, leading clinics, and experienced medical
                    instructors.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center pt-8">
              <p className="max-w-[900px] text-center text-muted-foreground md:text-lg">
                We do more than just teach—you join a community dedicated to making every second count in an emergency.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing & Sales Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Plan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer two learning options to suit your needs:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 pt-8">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Basic Course</CardTitle>
                  <CardDescription>Free</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Essential first aid skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Emergency response training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Completion certificate</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Enroll Now</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle>Premium Courses</CardTitle>
                  <CardDescription>From 7,990 tenge per course</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>All basic course features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Specialized skills (trauma care, poisoning management, burn treatment)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Additional interactive modules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>One-on-one expert consultations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Enroll Now</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center pt-8">
              <p className="max-w-[900px] text-center text-muted-foreground md:text-lg">
                We also offer special pricing for corporate clients, educational institutions, and group enrollments.
                Invest in your future—acquire the skills that can make a difference between life and death.
              </p>
            </div>
            <div className="flex justify-center pt-6">
              <Button className="bg-red-500 hover:bg-red-600 text-white" size="lg">
                Enroll Now and Become a Lifesaver!
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hear from Our Students</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our students have successfully applied their training in real emergencies, saving lives and providing
                  critical assistance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base">Aisha K.</CardTitle>
                      <CardDescription>Almaty</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "Thanks to the Alba course, I now have the confidence to act quickly and effectively. The
                    interactive lessons made it easy to learn and remember critical techniques."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base">Nurlan T.</CardTitle>
                      <CardDescription>Nur-Sultan</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "I was able to help my neighbor during a medical emergency because of what I learned in the Alba
                    first aid course. The practical simulations prepared me for a real-life situation."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="Avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base">Elena M.</CardTitle>
                      <CardDescription>Shymkent</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "As a teacher, I wanted to be prepared for any situation in my classroom. The Alba course gave me
                    the skills I needed, and the online format made it easy to fit into my busy schedule."
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center pt-8">
              <p className="max-w-[900px] text-center text-muted-foreground md:text-lg">
                Join our community of heroes and be prepared when every second counts.
              </p>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Connected</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Keep up with the latest updates, tips, and success stories by following us on social media. We
                  regularly share valuable first aid advice, inspiring real-life stories, and details on upcoming
                  webinars and special promotions.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-8 pt-8">
              <Link href="#" className="rounded-full bg-red-100 p-3 text-red-500 hover:bg-red-200">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="rounded-full bg-red-100 p-3 text-red-500 hover:bg-red-200">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="rounded-full bg-red-100 p-3 text-red-500 hover:bg-red-200">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="rounded-full bg-red-100 p-3 text-red-500 hover:bg-red-200">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
            <div className="flex justify-center pt-8">
              <div className="w-full max-w-md space-y-2">
                <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="bg-red-500 hover:bg-red-600 text-white">Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground">Together We Can Make a Difference!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Support Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or need more information about our courses? Our support team is here to help you choose
                  the right program, learn about special offers, and guide you through the enrollment process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 pt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-red-500" />
                    <p>+7 (XXX) XXX-XXXX</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-red-500" />
                    <p>info@alba-firstaid.kz</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-red-500" />
                    <p>123 Medical Center St., Almaty, Kazakhstan</p>
                  </div>
                  <div className="mt-6 p-3 bg-red-100 rounded-lg flex items-center gap-3">
                    <Phone className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="font-bold">Emergency Number: 103</p>
                      <p className="text-sm text-muted-foreground">For immediate medical assistance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <RegistrationForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-500" />
            <span className="text-lg font-bold">Alba</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Alba First Aid Training. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  )
}

