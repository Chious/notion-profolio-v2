import {
  TabsTrigger,
  TabsList,
  TabsContent,
  Tabs,
} from "@/app/component/Protfolio/TabGallery/Tabs";
import Link from "next/link";
import Image from "next/image";

export default function TabGallery() {
  return (
    <Tabs className="w-full max-w-4xl mx-auto" defaultValue="category1">
      <TabsList className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <TabsTrigger value={`category${index}`} key={index}>
            Category {index}
          </TabsTrigger>
        ))}
      </TabsList>
      {Array.from({ length: 3 }).map((_, index) => (
        <TabsContent value={`category${index}`} key={index}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <Image
                alt="Item 1"
                className="object-cover w-full h-60"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Item 1</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description for Item 1
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <Image
                alt="Item 2"
                className="object-cover w-full h-60"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Item 2</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description for Item 2
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <Image
                alt="Item 3"
                className="object-cover w-full h-60"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Item 3</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description for Item 3
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <Image
                alt="Item 4"
                className="object-cover w-full h-60"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Item 4</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description for Item 4
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <Image
                alt="Item 5"
                className="object-cover w-full h-60"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Item 5</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description for Item 5
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <Image
                alt="Item 6"
                className="object-cover w-full h-60"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl">Item 6</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description for Item 6
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
