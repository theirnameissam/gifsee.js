var gifsee = function (img) {
    this.element = img;
    if (!this.element.complete) {
        this.element.onload =  () => {
            this.gif = this.element.getAttribute('data-gifsee');
            this.src = this.element.src;
            this.classN = this.element.className;
            this.imageId = this.element.id;
            this.circle = this.generateCircle();
            this.circleText = this.circle.children[0];
            this.image = this.generateImage();
            this.container = this.generateContainer();
            this.parentElement = this.element.parentElement;
            this.container.appendChild(this.image);
            this.container.appendChild(this.circle);
            this.loaded = false;
            this.blobURL;
            this.isPlaying = false;
            this.parentElement.replaceChild(this.container, this.element);
            this.parentElement.addEventListener('click', (event) => {
                if (event.target === this.circle || event.target === this.circleText) {
                    this.showGif();
                } else if (this.isPlaying) {
                    if (event.target === this.circle || event.target === this.circleText || event.target === this.container || event.target === this.image) {
                     this.hideGif(); 
                    }
                }
            });
        }
    } else {
        this.gif = this.element.getAttribute('data-gifsee');
        this.src = this.element.src;
        this.classN = this.element.className;
        this.imageId = this.element.id;
        this.circle = this.generateCircle();
        this.circleText = this.circle.children[0];
        this.image = this.generateImage();
        this.container = this.generateContainer();
        this.parentElement = this.element.parentElement;
        this.container.appendChild(this.image);
        this.container.appendChild(this.circle);
        this.loaded = false;
        this.blobURL;
        this.isPlaying = false;
        this.parentElement.replaceChild(this.container, this.element);
        this.parentElement.addEventListener('click', (event) => {
            if (event.target === this.circle || event.target === this.circleText) {
                this.showGif();
            } else if (this.isPlaying) {
                if (event.target === this.circle || event.target === this.circleText || event.target === this.container || event.target === this.image) {
                    this.hideGif(); 
                }
            }
        });
    }
}

gifsee.prototype.generateCircle = function () {
    var circle = document.createElement('div');
        circle.className = 'gifsee-circle';
        var text = document.createElement('span');
            text.className = 'text';
        circle.appendChild(text);
    return circle;
}

gifsee.prototype.generateContainer = function () {
    var container = document.createElement('div');
        container.style.position = 'relative';
        container.style.width = this.element.offsetWidth + 'px';
    return container;     
}

gifsee.prototype.generateImage = function (className) {
    var img = document.createElement('img');
        img.className = this.classN;
        img.id = this.imageId;
        img.src = this.src;
        img.setAttribute('data-gif-location', this.gif);
    return img;
}

gifsee.prototype.showGif = function () {
    if(!this.loaded) {
        this.fetchGif().then( (blob) => {
            this.blobURL = URL.createObjectURL(blob);
            this.loaded = true;
            this.circle.classList.remove('loading');
            this.image.src = this.blobURL;
            this.circle.style.display = 'none';
            this.isPlaying = true;
        });
    } else {
        this.image.src = this.blobURL;
        this.circle.style.display = 'none';
        this.isPlaying = true;
    }
}

gifsee.prototype.fetchGif = function () {
    this.circle.classList.add('loading');
    return new Promise((resolve, reject) => {
       fetch(this.gif)
       .then(function (res) {
            res.blob().then(function (blob) {
                resolve(blob);
            }).catch(function(error) {
                reject(error);
            });  
       }).catch(function(error) {
           reject(error);
       }); 
    });
}

gifsee.prototype.hideGif = function () {
    this.image.src = this.src;
    this.circle.style.display = 'block';
    this.isPlaying = false;
}