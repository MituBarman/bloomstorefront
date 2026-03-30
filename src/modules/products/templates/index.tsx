import React, { Suspense } from "react"
import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  images,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="content-container flex large:flex-row flex-col gap-8 py-6 "
        data-testid="product-container"
      >
        {/* 🖼️ Images (Top) */}
        <div className="w-full">
          <ImageGallery images={images} />
        </div>

        {/* 📦 Product Info */}
        <div className="flex flex-col gap-6 w-full max-w-2xl">
          <ProductInfo product={product} />

          {/* 🛒 Actions */}
          <Suspense
            fallback={
              <ProductActions
                disabled
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>

          {/* 📑 Tabs */}
          <ProductTabs product={product} />
        </div>
      </div>

      {/* 🔗 Related Products */}
      <div
        className="content-container my-16 "
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate