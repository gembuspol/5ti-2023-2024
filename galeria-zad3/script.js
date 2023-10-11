function obraz(){

    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image8.jpg',
        'image9.jpg',
        'image10.jpg',
        'image11.jpg',
        'claw.jpg',
        'Riverbed.jpg',
        'Targetglyph.jpg',
        'BlackSwirley.jpg',
        'tunaround.jpg',
        'longrange.jpg'
      ];
      
      const randomImageBtn = document.getElementById('randomImageBtn');
      const displayedImage = document.getElementById('displayedImage');
      const galleryImages = document.querySelectorAll('.gallery img');
      const closeBtn = document.getElementById('closeBtn');
      const galleryContainer = document.querySelector('.gallery-container');
      const gallery = document.querySelector('.gallery');
      const prevBtn = document.querySelector('.prevBtn');
      const nextBtn = document.querySelector('.nextBtn');
      
      randomImageBtn.addEventListener('click', displayRandomImage);
      closeBtn.addEventListener('click', closeImage);
      
      galleryImages.forEach(img => {
        img.addEventListener('click', () => displayImage(img.src));
      });
      
      function displayRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        displayedImage.src = 'image1.jpg'+1;
      //displayedImage.src = 'image2.jpg'+1;
      //displayedImage.src = 'image3.jpg'+1;
      //displayedImage.src = 'image4.jpg'+1;
      //displayedImage.src = 'image5.jpg'+1;
        displayedImage.src = 'image6.jpg'+1;
        displayedImage.src = 'image7.jpg'+1;
        displayedImage.src = 'image8.jpg'+1;
        displayedImage.src = 'image9.jpg'+1;
        displayedImage.src = 'image10.jpg'+1;
        displayedImage.src = 'image11.jpg'+1;
        displayedImage.src = 'claw.jpg'+1;
        displayedImage.src = 'Riverbed.jpg'+1;
        displayedImage.src = 'Targetglyph.jpg'+1;
        displayedImage.src = 'BlackSwirley.jpg'+1;
        displayedImage.src = 'turnaround.jpg'+1;
        displayedImage.src = 'longrange.jpg'+1;

        displayedImage.style.display = 'block';
      }
      
      function displayImage(imageSrc) {
        displayedImage.src = imageSrc;
        displayedImage.style.display = 'block';
      }

    

    
    function closeImage() {
      displayedImage.style.display = 'none';
    }

    function scrollGallery(direction) {
      const scrollAmount = 300 * direction;
      gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    
  }
  

