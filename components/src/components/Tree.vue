<template>
  <div class="particle">
    <div ref="container" class="container"></div>
  </div>
</template>
<script>
  // import * as THREE from 'three'

  export default {
    props: {
      color: {
        default: 0x77ace0
      }
    },
    data: () => ({
      removeHandle: null
    }),
    mounted () {
      let color = this.color

      let SEPARATION = 100
      let AMOUNTX = 100
      let AMOUNTY = 70
       
      let container = this.$refs.container
      let camera, scene, renderer;
   
      let particles, particle, count = 0
   
      let mouseX = 85
      let mouseY = -342
   
      let windowHalfX = container.clientWidth / 2
      let windowHalfY = container.clientHeight / 2
      init()
      animate()
       
      function init () {
        camera = new THREE.PerspectiveCamera(120, container.clientWidth / container.clientHeight, 1, 10000)
        camera.position.z = 1000

        scene = new THREE.Scene()

        particles = new Array()

        let PI2 = Math.PI * 2
        let material = new THREE.ParticleCanvasMaterial({
          color: color,
          program: function (context) {
            context.beginPath()
            context.arc(0, 0, .6, 0, PI2, true)
            context.fill()
          }
        })
   
        let i = 0
 
        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++] = new THREE.Particle(material)
            particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2)
            particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2)
            scene.add(particle)
          }
        }
   
        renderer = new THREE.CanvasRenderer()
        renderer.setSize(container.clientWidth, container.clientHeight)
        container.appendChild(renderer.domElement)
 
        container.addEventListener('mousemove', onDocumentMouseMove, false)
        container.addEventListener('touchstart', onDocumentTouchStart, false)
        container.addEventListener('touchmove', onDocumentTouchMove, false)

        window.addEventListener('resize', onWindowResize, false)
      }
   
      function onWindowResize () {
        windowHalfX = container.clientWidth / 2
        windowHalfY = container.clientHeight / 2
 
        camera.aspect = container.clientWidth / container.clientHeight
        camera.updateProjectionMatrix()
 
        renderer.setSize(container.clientWidth, container.clientHeight)
        console.log('onWindowResize')
      }
      function onDocumentMouseMove (event) {
        mouseX = event.clientX - windowHalfX
        mouseY = event.clientY - windowHalfY
        console.log('onDocumentMouseMove')
      }
       
      function onDocumentTouchStart (event) {
        if (event.touches.length === 1) {
          event.preventDefault()

          mouseX = event.touches[0].pageX - windowHalfX
          mouseY = event.touches[0].pageY - windowHalfY
        }
        console.log('onDocumentTouchStart')

      }
       
      function onDocumentTouchMove (event) {
        if (event.touches.length === 1) {
          event.preventDefault()
          mouseX = event.touches[0].pageX - windowHalfX
          mouseY = event.touches[0].pageY - windowHalfY
        }
        console.log('onDocumentTouchMove')
      }
       
      function animate () {
        requestAnimationFrame(animate)
        render()
      }
       
      function render () {
        camera.position.x += (mouseX - camera.position.x) * .05
        camera.position.y += (-mouseY - camera.position.y) * .05
        camera.lookAt(scene.position)
   
        let i = 0
   
        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++];
            particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50)
            particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2
          }
        }
        renderer.render(scene, camera)
        count += 0.1
      }

      this.removeHandle = function () {
        container.removeEventListener('mousemove', onDocumentMouseMove)
        container.removeEventListener('touchstart', onDocumentTouchStart)
        container.removeEventListener('touchmove', onDocumentTouchMove)
        window.removeEventListener('resize', onWindowResize)
      }
    },
    beforeDestroy () {
      console.log('beforeDestroy')
      this.removeHandle && this.removeHandle()
    }
  }
</script>
<style lang="scss">
  .container {
    width: 100%;
    height: 510px;
  }
</style>