<template>
    <div class="mr-5 ml-5" id="container">

        <div class="flex items-center justify-center pt-20">
            <div>
                <a href="/FrontEnd-Pasteleria/Home" class="text-sm font-notoSansJP">Inicio</a><span> > </span><span
                    class="text-sm font-medium font-notoSansJP">Cursos</span>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center pt-4">
            <h1 class="text-[#951d1c] font-notoSansJP font-bold relative text-3xl sm">
                <span>CURSOS</span>
            </h1>
        </div>

        <!-- Banner Principal -->
        <div class="relative bg-gradient-to-r from-[#951d1c] to-[#c42a29] rounded-xl shadow-2xl overflow-hidden mt-8 mb-10">
            <!-- Overlay degradado para mejorar legibilidad del texto -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
            
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div class="text-white z-10">
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-notoSansJP font-bold mb-4">
                            <span class="block">¡Capacítate con</span>
                            <span class="block text-yellow-300">Nosotros!</span>
                        </h2>
                        <p class="text-lg md:text-xl mb-6 font-notoSansJP opacity-95">
                            Aprende las mejores técnicas de pastelería con nuestros cursos online profesionales. 
                            Desde lo básico hasta lo avanzado, todo en un solo lugar.
                        </p>
                        <div class="flex flex-wrap gap-4 mb-8">
                            <div class="flex items-center">
                                <svg class="w-5 h-5 md:w-6 md:h-6 mr-2 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span class="font-notoSansJP text-sm md:text-base">Clases en video HD</span>
                            </div>
                            <div class="flex items-center">
                                <svg class="w-5 h-5 md:w-6 md:h-6 mr-2 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span class="font-notoSansJP text-sm md:text-base">Acceso ilimitado</span>
                            </div>
                            <div class="flex items-center">
                                <svg class="w-5 h-5 md:w-6 md:h-6 mr-2 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span class="font-notoSansJP text-sm md:text-base">Certificado incluido</span>
                            </div>
                        </div>
                        <div class="mt-6 flex flex-col sm:flex-row gap-4">
                            <button 
                                @click="viewAllCourses"
                                class="bg-yellow-400 hover:bg-yellow-500 text-[#951d1c] font-notoSansJP font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg transition-all transform hover:scale-105 shadow-lg">
                                Ver Todos los Cursos
                            </button>
                            <button 
                                class="bg-white/20 hover:bg-white/30 text-white font-notoSansJP font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg transition-all border-2 border-white backdrop-blur-sm">
                                Contáctanos
                            </button>
                        </div>
                    </div>
                    
                    <!-- Contenedor del Video -->
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-black/20">
                        <div class="relative w-full pt-[56.25%]"> <!-- Relación 16:9 -->
                            <video 
                                ref="promoVideo"
                                class="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                                autoplay 
                                muted 
                                loop 
                                playsinline
                                poster=""
                                @loadedmetadata="onVideoLoad"
                                @click="togglePlay">
                                <source src="/src/assets/imagen/video_prueba.mp4" type="video/mp4">
                                Tu navegador no soporta el elemento de video.
                            </video>
                            
                           
                        </div>
                        
                        <!-- Etiqueta informativa -->
                        <div class="absolute top-3 left-3 bg-[#951d1c] text-white px-3 py-1 rounded-full text-xs font-notoSansJP font-bold z-10">
                            ¡Cociná las mejores recetas!
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Filtros y búsqueda -->
        <div class="pt-8 pb-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="flex flex-wrap gap-2">
                    <button 
                        v-for="(category, index) in categories" 
                        :key="index"
                        @click="filterByCategory(category)"
                        class="px-4 py-2 rounded-full text-sm font-notoSansJP transition-all"
                        :class="selectedCategory === category 
                            ? 'bg-[#951d1c] text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'">
                        {{ category }}
                    </button>
                </div>
                <div class="relative w-full md:w-64">
                    <input 
                        type="text" 
                        v-model="searchQuery"
                        placeholder="Buscar cursos..."
                        class="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#951d1c] font-notoSansJP"
                    />
                    <svg class="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
            </div>
        </div>

        <!-- Cursos Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
            <div 
                v-for="(course, index) in filteredCourses" 
                :key="index"
                class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="relative">
                    <img 
                        :src="course.thumbnail" 
                        :alt="course.title"
                        class="w-full h-48 object-cover"
                    />
                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-notoSansJP">
                        {{ course.duration }}
                    </div>
                </div>
                <div class="p-4">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="px-2 py-1 text-xs font-notoSansJP rounded-full" 
                            :class="getCategoryClass(course.category)">
                            {{ course.category }}
                        </span>
                        
                    </div>
                    <h3 class="font-notoSansJP font-bold text-lg text-gray-800 mb-2 line-clamp-2">
                        {{ course.title }}
                    </h3>
                    <p class="font-notoSansJP text-sm text-gray-600 mb-3 line-clamp-3">
                        {{ course.description }}
                    </p>
                    <div class="flex justify-between items-center">
                        <div>
                            <span class="font-notoSansJP font-bold text-[#951d1c] text-lg">
                                {{ course.price }}
                            </span>
                            <span v-if="course.originalPrice" class="ml-2 text-sm text-gray-500 line-through">
                                {{ course.originalPrice }}
                            </span>
                        </div>
                        <button 
                            @click="viewCourse(course)"
                            class="bg-[#951d1c] hover:bg-[#7a1716] text-white px-4 py-2 rounded-lg font-notoSansJP font-medium transition-colors duration-300">
                            Ver Curso
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Paginación -->
        <div class="flex justify-center items-center py-8">
            <button 
                @click="prevPage"
                :disabled="currentPage === 1"
                class="px-4 py-2 mx-1 rounded font-notoSansJP disabled:opacity-50 disabled:cursor-not-allowed"
                :class="currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-white text-[#951d1c] border border-[#951d1c] hover:bg-[#951d1c] hover:text-white'">
                Anterior
            </button>
            <button 
                v-for="page in totalPages" 
                :key="page"
                @click="goToPage(page)"
                class="px-4 py-2 mx-1 rounded font-notoSansJP"
                :class="currentPage === page 
                    ? 'bg-[#951d1c] text-white' 
                    : 'bg-white text-[#951d1c] border border-[#951d1c] hover:bg-gray-100'">
                {{ page }}
            </button>
            <button 
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="px-4 py-2 mx-1 rounded font-notoSansJP disabled:opacity-50 disabled:cursor-not-allowed"
                :class="currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-white text-[#951d1c] border border-[#951d1c] hover:bg-[#951d1c] hover:text-white'">
                Siguiente
            </button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CursosSection',
    data() {
        return {
            searchQuery: '',
            selectedCategory: 'Todos',
            currentPage: 1,
            coursesPerPage: 8,
            categories: ['Todos', 'Tortas', 'Postres', 'Panadería', 'Decoración', 'Técnicas Básicas'],
            allCourses: [
                {
                    id: 1,
                    title: 'Nombre curso 1',
                    description: 'Descripcion 1',
                    thumbnail: 'https://images.unsplash.com/photo-1571115177098-24ec42ed28a4?w=400',
                    duration: '8h 30m',
                    category: 'Tortas',
                    price: '$120.000',
                    originalPrice: '$150.000',
                    
                    videos: 24
                },
                {
                    id: 2,
                    title: 'Nombre curso 2',
                    description: 'Descripcion 2',
                    thumbnail: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400',
                    duration: '4h 15m',
                    category: 'Postres',
                    price: '$85.000',
                    originalPrice: null,
                   
                    videos: 12
                },
                {
                    id: 3,
                    title: 'Nombre curso 3',
                    description: 'Descripcion 3',
                    thumbnail: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
                    duration: '6h 45m',
                    category: 'Panadería',
                    price: '$95.000',
                    originalPrice: '$110.000',
                    
                    videos: 18
                },
                
            ]
        };
    },
    computed: {
        filteredCourses() {
            let filtered = this.allCourses;
            
            // Filtro por categoría
            if (this.selectedCategory !== 'Todos') {
                filtered = filtered.filter(course => course.category === this.selectedCategory);
            }
            
            // Filtro por búsqueda
            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                filtered = filtered.filter(course => 
                    course.title.toLowerCase().includes(query) || 
                    course.description.toLowerCase().includes(query)
                );
            }
            
            // Paginación
            const startIndex = (this.currentPage - 1) * this.coursesPerPage;
            return filtered.slice(startIndex, startIndex + this.coursesPerPage);
        },
        totalPages() {
            let filtered = this.allCourses;
            if (this.selectedCategory !== 'Todos') {
                filtered = filtered.filter(course => course.category === this.selectedCategory);
            }
            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                filtered = filtered.filter(course => 
                    course.title.toLowerCase().includes(query) || 
                    course.description.toLowerCase().includes(query)
                );
            }
            return Math.ceil(filtered.length / this.coursesPerPage);
        }
    },
    methods: {
        filterByCategory(category) {
            this.selectedCategory = category;
            this.currentPage = 1;
        },
        getCategoryClass(category) {
            const colors = {
                'Tortas': 'bg-red-100 text-red-800',
                'Postres': 'bg-yellow-100 text-yellow-800',
                'Panadería': 'bg-orange-100 text-orange-800',
                'Decoración': 'bg-pink-100 text-pink-800',
                'Técnicas Básicas': 'bg-blue-100 text-blue-800'
            };
            return colors[category] || 'bg-gray-100 text-gray-800';
        },
        viewCourse(course) {
            // Aquí iría la lógica para ver el curso
            console.log('Ver curso:', course.title);
            // this.$router.push(`/curso/${course.id}`)
        },
        viewAllCourses() {
            console.log('Ver todos los cursos');
            // this.$router.push('/cursos')
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        goToPage(page) {
            this.currentPage = page;
        }
    }
};
</script>

<style scoped>
h1 {
    text-align: center;
    border-bottom: 1px solid #951d1c;
    line-height: 0.1em;
    margin: 10px 0 20px;
    width: 100%;
}

h1 span {
    background-color: #fff;
    padding: 0 10px;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>