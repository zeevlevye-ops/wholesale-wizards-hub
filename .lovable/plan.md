

# Plan de Pulido Completo: Todos los Ajustes en Una Sola Iteracion

## Resumen

Este plan cubre todas las correcciones y mejoras solicitadas organizadas por nivel, para implementar todo de una vez.

---

## 1. Pagina de Inicio (Nivel 1) - Solo un ajuste

**Problema**: El boton "Categorias" en el header no funciona correctamente para navegar al segundo nivel.

**Solucion**: El link `/#categorias` en el header ya esta configurado, pero necesita ajustarse para que funcione correctamente con React Router. Cambiar el enlace para usar scroll suave al section `#categorias` cuando estamos en Home, o navegar a `/#categorias` si estamos en otra pagina.

---

## 2. Paginas de Categoria (Nivel 2) - Multiples correcciones

### 2.1 Pagina abre a la mitad

**Causa**: React Router no hace scroll al inicio por defecto al cambiar de ruta.

**Solucion**: Agregar `useEffect` con `window.scrollTo(0, 0)` al inicio de `CategoryPage.tsx` cuando cambia el `categorySlug`.

### 2.2 Productos no aparecen en todas las categorias

**Causa identificada**: Bug en `products.ts`. El parser del CSV asigna `currentCategory` usando el campo `name` de la fila de categoria (ejemplo: "Cajas Plasticas Industriales"), pero el mapeo `categoryNameToSlug` espera "Cajas Plasticas". Es decir, los nombres no coinciden.

Ejemplo del bug:
- CSV categoria row name: "Cajas Plasticas Industriales"  
- Mapeo espera: "Cajas Plasticas"
- Resultado: Los productos de "Cajas Plasticas" no se encuentran

"Racks y Estanteria" funciona porque el nombre en la fila de categoria coincide exactamente con el mapeo.

**Solucion**: Cambiar `products.ts` para que los productos usen su propio campo `category` del CSV (columna 9) en lugar de heredar del `name` de la fila padre de categoria. Cada producto ya tiene su categoria correcta en el CSV (ejemplo: "Cajas Plasticas").

### 2.3 Mas contenido SEO por categoria

**Solucion**: Expandir `category-themes.ts` con mas keywords incluyendo:
- Variantes con tildes y sin tildes
- Sinonimos (ejemplo: "contenedores" para cajas)
- Terminos regionales mexicanos
- Frases de busqueda B2B (fabrica de, distribuidor de, proveedor de, mayoreo de, venta al por mayor de)
- Terminos de uso industrial especificos

### 2.4 Cambiar "Categorias" por "Catalogo" en el header

**Solucion**: En `Header.tsx`, cambiar el texto del link de "Categorias" a "Catalogo". Cuando se esta en una pagina de categoria, el link hace scroll al section `#productos` (grid de productos). En Home o producto, navega a la seccion de categorias del inicio.

---

## 3. Paginas de Producto (Nivel 3) - Multiples correcciones

### 3.1 Pagina abre desde arriba

**Solucion**: Agregar `useEffect` con `window.scrollTo(0, 0)` en `ProductPage.tsx` cuando cambia el `slug`.

### 3.2 Mas SEO en productos

**Solucion**: Expandir las descripciones en `ProductSchema.tsx` y `HeroProduct.tsx` con mas keywords B2B. Agregar meta description dinamica mas completa por producto.

### 3.3 Cambiar "Categorias" por "Catalogo" en el header

**Solucion**: Mismo cambio del punto 2.4. El header detecta si estamos en una pagina de producto y el link "Catalogo" lleva a la pagina de la categoria correspondiente con scroll a `#productos`.

Implementacion: El header recibira contexto de la ruta actual para decidir el comportamiento del link.

### 3.4 Seccion de Productos Similares

**Solucion**: Crear componente `RelatedProducts.tsx` que:
- Filtra productos de la misma categoria (excluyendo el actual)
- Muestra entre 3 y 6 productos aleatorios
- Cards con imagen, nombre y enlace
- Se coloca antes del footer en `ProductPage.tsx`
- Sin precios ni estrellas, solo imagen + nombre + "Cotizar"

### 3.5 Codigos SKU y EAN del Excel

**Datos del Excel**: El archivo contiene 142 productos con:
- Nombre del producto
- Codigo SKU detallado (ejemplo: CAJA-PLASTICA-102-NEGRO-CON-001)
- Codigo EAN (en notacion cientifica, necesita conversion)

**Solucion**: 
- Actualizar el CSV (`products-catalog.csv`) con los nuevos SKUs del Excel
- Los EAN del Excel estan en notacion cientifica y no son confiables (se pierden digitos). Se mantendran los EAN actuales del CSV donde existan
- Mostrar SKU visiblemente en la ficha del producto (ya se muestra en ProductSpecs)
- Asegurar que el ProductSchema.tsx incluya correctamente SKU y EAN

### 3.6 Limpieza de botones rotos

| Boton | Ubicacion | Accion |
|-------|-----------|--------|
| "Ver Ficha Completa" | ProductSpecs.tsx linea 58 | Eliminar |
| "Descargar PDF" | ProductSpecs.tsx linea 62 | Eliminar |
| "Ver Especificaciones" | HeroProduct.tsx linea 80 | Corregir: scroll suave a #especificaciones |
| "Solicitar Cotizacion" | HeroProduct.tsx linea 76 | Corregir: scroll suave a #cotizar |
| "Hablar con un Especialista" | ProductSpecs.tsx linea 108 | Reemplazar por texto con telefono: "Habla con un especialista al 5525897917" |

---

## Detalles Tecnicos: Archivos a Modificar

### 1. `src/data/products.ts`
- Cambiar la asignacion de `category` para usar el campo propio del producto CSV en lugar de `currentCategory`
- Si el producto tiene su propio campo `category` en el CSV, usarlo; si no, usar el del padre

### 2. `src/pages/CategoryPage.tsx`
- Agregar `useEffect` para scroll to top al montar o cambiar de categoria

### 3. `src/pages/ProductPage.tsx`
- Agregar `useEffect` para scroll to top al montar o cambiar de producto
- Agregar componente `RelatedProducts` antes del footer
- Pasar datos de categoria para el link de "Catalogo" en header

### 4. `src/components/layout/Header.tsx`
- Cambiar "Categorias" por "Catalogo"
- Hacer el link contextual: scroll a #productos en categoria, link a categoria en producto, scroll a #categorias en home

### 5. `src/components/sections/ProductSpecs.tsx`
- Eliminar boton "Ver Ficha Completa"
- Eliminar boton "Descargar PDF"
- Reemplazar boton "Hablar con un Especialista" por texto con telefono

### 6. `src/components/sections/HeroProduct.tsx`
- Corregir "Ver Especificaciones" para scroll suave a `#especificaciones`
- Corregir "Solicitar Cotizacion" para scroll suave a `#cotizar`

### 7. Crear `src/components/sections/RelatedProducts.tsx` (NUEVO)
- Muestra 3-6 productos de la misma categoria
- Cards con imagen, nombre y link
- Sin precios ni estrellas

### 8. `src/data/category-themes.ts`
- Expandir keywords SEO con mas variantes y sinonimos por categoria
- Agregar terminos de busqueda adicionales para cada "fabrica"

### 9. `src/data/products-catalog.csv`
- Actualizar SKUs con los codigos del Excel donde sea posible (mapeo por nombre de producto)

### 10. `src/components/seo/ProductSchema.tsx`
- Verificar que SKU y EAN esten correctamente integrados en el schema JSON-LD

---

## Orden de Implementacion

1. Corregir bug de categorias (products.ts) - es la raiz del problema de productos faltantes
2. Scroll to top en CategoryPage y ProductPage
3. Limpiar botones rotos en ProductSpecs y HeroProduct
4. Actualizar Header con "Catalogo" contextual
5. Crear RelatedProducts y agregarlo a ProductPage
6. Expandir SEO keywords en category-themes
7. Actualizar CSV con nuevos SKUs del Excel

