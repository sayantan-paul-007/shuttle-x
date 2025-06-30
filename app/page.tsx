import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CardSkeleton from '@/components/Skeletons'
import { Card } from '@/components/ui/card'
import { Tabs,TabsContent,
  TabsList,
  TabsTrigger, } from '@/components/ui/tabs'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Tabs defaultValue='tab1' className='flex flex-row items-center'>
        <TabsList className="max-w-2xl mx-auto mt-8 flex flex-col">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" className="max-w-2xl mx-auto p-6">
          <Suspense fallback={<CardSkeleton />}>
        <Card className="max-w-2xl mx-auto mt-8 p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Website 1</h2>
        <p className="text-gray-700">
          This is a simple example of a Next.js application with a header and hero section.
          You can customize it further to suit your needs.
        </p>
      </Card>
      </Suspense>
        </TabsContent>
        <TabsContent value="tab2" className="max-w-2xl mx-auto p-6">
          <Suspense fallback={<CardSkeleton />}>
        <Card className="max-w-2xl mx-auto mt-8 p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Website 2</h2>
        <p className="text-gray-700">
          This is a simple example of a Next.js application with a header and hero section.
          You can customize it further to suit your needs.
        </p>
      </Card>
      </Suspense>
        </TabsContent>
        <TabsContent value="tab3" className="max-w-2xl mx-auto p-6">
        <Suspense fallback={<CardSkeleton />}>
        <Card className="max-w-2xl mx-auto mt-8 p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Website 3</h2>
        <p className="text-gray-700">
          This is a simple example of a Next.js application with a header and hero section.
          You can customize it further to suit your needs.
        </p>
      </Card>
      </Suspense>
        </TabsContent>  
      </Tabs>
      
      
    </main>
  )
}

export default Page