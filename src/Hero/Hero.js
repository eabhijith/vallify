import { useState, useMemo } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function Hero() {
  const categories = [
    { id: 1, name: "Lumber", image: "/placeholder.svg" },
    { id: 2, name: "Concrete", image: "/placeholder.svg" },
    { id: 3, name: "Roofing", image: "/placeholder.svg" },
    { id: 4, name: "Electrical", image: "/placeholder.svg" },
    { id: 5, name: "Plumbing", image: "/placeholder.svg" },
    { id: 6, name: "Tools", image: "/placeholder.svg" },
    { id: 7, name: "Customized", image: "/placeholder.svg" },
    { id: 8, name: "Smart Home", image: "/placeholder.svg" },
  ]
  const products = [
    {
      id: 1,
      name: "2x4x8 Pressure Treated Lumber",
      description: "High-quality pressure treated lumber for outdoor projects",
      price: 499,
      image: "/placeholder.svg",
      category: "Lumber",
    },
    {
      id: 2,
      name: "Quickrete Concrete Mix",
      description: "Fast-setting concrete for DIY projects",
      price: 799,
      image: "/placeholder.svg",
      category: "Concrete",
    },
    {
      id: 3,
      name: "Architectural Shingles",
      description: "Durable and stylish roofing shingles",
      price: 1899,
      image: "/placeholder.svg",
      category: "Roofing",
    },
    {
      id: 4,
      name: "Electrical Outlet",
      description: "High-quality electrical outlet for indoor use",
      price: 299,
      image: "/placeholder.svg",
      category: "Electrical",
    },
    {
      id: 5,
      name: "PVC Pipe",
      description: "Flexible and durable plumbing pipe",
      price: 549,
      image: "/placeholder.svg",
      category: "Plumbing",
    },
    {
      id: 6,
      name: "Hammer",
      description: "Sturdy and reliable hammer for DIY projects",
      price: 899,
      image: "/placeholder.svg",
      category: "Tools",
    },
    {
      id: 7,
      name: "Custom Cabinet",
      description: "Bespoke cabinetry for your unique needs",
      price: 2999,
      image: "/placeholder.svg",
      category: "Customized",
    },
    {
      id: 8,
      name: "Smart Home Hub",
      description: "Centralized control for your connected home",
      price: 1499,
      image: "/placeholder.svg",
      category: "Smart Home",
    },
  ]
  const projects = [
    {
      id: 1,
      name: "Residential Remodel",
      description: "Renovating a 2-bedroom home",
      image: "/placeholder.svg",
      category: "Lumber, Concrete, Roofing",
    },
    {
      id: 2,
      name: "Commercial Office Build-out",
      description: "Constructing a new office space",
      image: "/placeholder.svg",
      category: "Electrical, Plumbing, Tools",
    },
    {
      id: 3,
      name: "Backyard Deck",
      description: "Building a custom outdoor deck",
      image: "/placeholder.svg",
      category: "Lumber, Tools",
    },
    {
      id: 4,
      name: "Bathroom Renovation",
      description: "Updating a master bathroom",
      image: "/placeholder.svg",
      category: "Plumbing, Tiles",
    },
    {
      id: 5,
      name: "Custom Home Design",
      description: "Designing a unique, one-of-a-kind home",
      image: "/placeholder.svg",
      category: "Lumber, Concrete, Customized",
    },
    {
      id: 6,
      name: "Smart Home Automation",
      description: "Integrating smart home technology",
      image: "/placeholder.svg",
      category: "Electrical, Smart Home",
    },
  ]
  const [cart, setCart] = useState([])
  const [filters, setFilters] = useState({
    category: [],
    price: { min: 0, max: Infinity },
    sort: "featured",
  })
  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId))
  }
  const handleFilterChange = (type, value) => {
    setFilters({
      ...filters,
      [type]: value,
    })
  }
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (filters.category.length > 0 && !filters.category.includes(product.category)) {
          return false
        }
        if (product.price < filters.price.min || product.price > filters.price.max) {
          return false
        }
        return true
      })
      .sort((a, b) => {
        switch (filters.sort) {
          case "featured":
            return b.featured - a.featured
          case "low":
            return a.price - b.price
          case "high":
            return b.price - a.price
          default:
            return 0
        }
      })
  }, [filters, products])
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (filters.category.length > 0 && !filters.category.some((category) => project.category.includes(category))) {
        return false
      }
      return true
    })
  }, [filters, projects])
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-xl font-bold" prefetch={false}>
            Vallify Works
          </Link>
          <form className="relative w-full max-w-md">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </form>
        </div>
      </header>
      <section className="bg-muted py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">Find the Best Construction Materials</h1>
            <p className="text-muted-foreground mb-6">
              Search our wide selection of high-quality construction materials for all your building needs.
            </p>
            <form className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </form>
          </div>
          <img src="/placeholder.svg" alt="Hero Image" width={600} height={400} className="rounded-lg object-cover" />
        </div>
      </section>
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href="#"
                className="flex flex-col items-center gap-2 hover:text-primary transition-colors"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
                  alt={category.name}
                  width={100}
                  height={100}
                  className="rounded-full w-20 h-20 object-cover"
                />
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Popular Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href="#" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold">₹{product.price}</span>
                      <Button variant="outline" onClick={() => handleAddToCart(product)}>
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href="#" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt={project.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold">{project.category}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
          <div className="bg-background rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Filters</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="text-base font-medium mb-2">Category</h4>
                <div className="grid gap-2">
                  {categories.map((category) => (
                    <Label key={category.id} className="flex items-center gap-2 font-normal">
                      <Checkbox
                        checked={filters.category.includes(category.name)}
                        onCheckedChange={() =>
                          handleFilterChange(
                            "category",
                            filters.category.includes(category.name)
                              ? filters.category.filter((c) => c !== category.name)
                              : [...filters.category, category.name],
                          )
                        }
                      />
                      {category.name}
                    </Label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-base font-medium mb-2">Price</h4>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.price.min === 0 && filters.price.max === Infinity}
                      onCheckedChange={() => handleFilterChange("price", { min: 0, max: Infinity })}
                    />
                    All
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.price.min >= 0 && filters.price.max < 3000}
                      onCheckedChange={() => handleFilterChange("price", { min: 0, max: 3000 })}
                    />
                    ₹0 - ₹3,000
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.price.min >= 3000 && filters.price.max < 6000}
                      onCheckedChange={() => handleFilterChange("price", { min: 3000, max: 6000 })}
                    />
                    ₹3,000 - ₹6,000
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.price.min >= 6000}
                      onCheckedChange={() => handleFilterChange("price", { min: 6000, max: Infinity })}
                    />
                    ₹6,000+
                  </Label>
                </div>
              </div>
              <div>
                <h4 className="text-base font-medium mb-2">Sort</h4>
                <Select value={filters.sort} onValueChange={(value) => handleFilterChange("sort", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="low">Low to</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}