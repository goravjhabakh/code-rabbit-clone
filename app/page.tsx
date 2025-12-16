import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ROADMAP } from "@/lib/roadmap"
import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between p-6">
        <h1 className="text-xl font-bold">
          CodeRabbit Clone
        </h1>
        <Button variant={'outline'} asChild>
          <Link href={'https://github.com/goravjhabakh/code-rabbit-clone'} target="_blank">
            <Image src="/github.svg" alt="github" width={20} height={20} className="dark:invert"/>
            <span>GitHub</span>
          </Link>
        </Button>
      </header>

      <Separator />

      <section className="py-20 text-center space-y-4 px-4">
        <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Automated PR Reviews powered by AI
        </h2>
        <p className="text-xl text-muted-foreground">
          Context-aware AI that learns your codebase and fits your workflow.
        </p>
      </section>

      <Separator className="mb-8"/>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Development Roadmap
        </h3>
        <div>
          <Accordion type="single" collapsible className="w-full space-y-6" defaultValue="phase-0">
            {ROADMAP.map((phase) => {
              const isCurrent = phase.status === 'current'

              return (
                <div key={phase.id} className={`transition-all duration-200 ${isCurrent ? "opacity-100 transform scale-[1.01]" : "opacity-60 hover:opacity-80 grayscale-[0.5]"}`}>
                  <Card className={`border-2 ${isCurrent ? "border-green-500/50 shadow-lg shadow-green-500/10" : "border-border"}`}>
                    <CardHeader className="py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CardTitle className={isCurrent ? "text-green-500" : ""}>
                            {phase.title}
                          </CardTitle>
                          {isCurrent ? (
                            <Badge className="bg-green-500 hover:bg-green-600">
                              {phase.status}
                            </Badge>
                          ) : (
                            <Badge variant={'secondary'}>
                              {phase.status}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardDescription>
                        {phase.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <AccordionItem value={phase.id} className="border-none">
                        <AccordionTrigger className="hover:no-underline py-2 text-sm font-medium">
                          View Features
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc ml-6 mt-2 space-y-1">
                            {phase.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </Accordion>
        </div>
      </section>
    </main>
  )
}
export default Home