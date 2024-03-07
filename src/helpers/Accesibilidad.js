onload = function () {

    /*Activar-Desactivar Lectura por Parrafos*/
    const actVoz = document.querySelector('#activar-voz');
    const desacVoz = document.querySelector('#desactivar-voz');

    actVoz.addEventListener('click', onClickActivarVoz);
    desacVoz.addEventListener('click', onClickDesactivarVoz);

    /*Activar-Desactivar Lectura por Selección*/
    const actSelecVoz = document.querySelector('#activarSeleccion-voz');
    const desacSelecVoz = document.querySelector('#desactivarSeleccion-voz');

    actSelecVoz.addEventListener('click', onClickActivarSeleccionVoz);
    desacSelecVoz.addEventListener('click', onClickDesactivarSeleccionVoz);

    /*Botones de Lectura por Selección*/
    const btnplay = document.querySelector("#btn_play");
    const btnpause = document.querySelector("#btn_pause");
    const btnstop = document.querySelector("#btn_stop");

    btnplay.addEventListener('click', onClickPlaySeleccion);
    btnpause.addEventListener('click', onClickPauseSeleccion);
    btnstop.addEventListener('click', onClickStopSeleccion);

    /*Elementos en Memoria */
    let idTextoMemoria = null;
    let idBotonMemoria = null;

    /*Variable de Voz */
    var synth = speechSynthesis;

    /*Activar el boton de lectura por parrafos*/
    function onClickActivarVoz(event) {
        console.log("Estoy dentro");
        if (event.target.id == "activar-voz") {

            /*Activar y desactivar el boton de lectura por parrafos*/
            document.getElementById("activar-voz").style.display = "none";
            document.getElementById("desactivar-voz").style.display = "block";

            let contenido = document.querySelectorAll("#speak");
            let botones = document.querySelectorAll(".btn1");

            if (contenido.length > 0) {

                for (var i = 0; i < contenido.length; i++) {

                    let idTexto = document.getElementById("speak");

                    if (idBotonMemoria != botones.length) {

                        idTexto.id = `${(botones.length + i)}`;

                        /*Crear Boton PLAY*/
                        const btn_play = document.createElement('button');
                        idTexto.appendChild(btn_play);
                        btn_play.className = 'btn1 btn2';
                        btn_play.id = `play${(botones.length + i)}`;

                        const i_play = document.createElement('i');
                        i_play.className = 'fa fa-play';
                        btn_play.appendChild(i_play);

                        /*Crear Boton PAUSE*/
                        const btn_pause = document.createElement('button');
                        idTexto.appendChild(btn_pause);
                        btn_pause.className = 'btn1 btn3';
                        btn_pause.id = `pause${(botones.length + i)}`;
                        btn_pause.display = 'none';

                        const i_pause = document.createElement('i');
                        i_pause.className = 'fa fa-pause';
                        btn_pause.appendChild(i_pause);

                        /*Crear Boton STOP*/
                        const btn_stop = document.createElement('button');
                        idTexto.appendChild(btn_stop);
                        btn_stop.className = 'btn1 btn3';
                        btn_stop.id = `stop${(botones.length + i)}`;

                        const i_stop = document.createElement('i');
                        i_stop.className = 'fa fa-stop';
                        btn_stop.appendChild(i_stop);


                        /*Posición*/
                        idTexto.insertAdjacentElement("beforeend", btn_play);
                        btn_play.insertAdjacentElement("afterend", btn_pause);
                        btn_pause.insertAdjacentElement("afterend", btn_stop);

                        const br = document.createElement('br');
                        btn_stop.insertAdjacentElement("afterend", br);

                        /*Guardar boton en memoria*/
                        idBotonMemoria = btn_play.id;
                        console.log(idBotonMemoria);

                    }

                    const btnPlayParrafo = document.querySelector(`#play${botones.length + i}`);
                    const btnPauseParrafo = document.querySelector(`#pause${botones.length + i}`);
                    const btnStopParrafo = document.querySelector(`#stop${botones.length + i}`);

                    btnPlayParrafo.addEventListener('click', (event) => play(event, idTexto));
                    btnPauseParrafo.addEventListener('click', (event) => pause(event, idTexto));
                    btnStopParrafo.addEventListener('click', (event) => stop(event, idTexto));
                }

                const boton = document.querySelectorAll("button");
                console.log('Entro a else')
                for (var i = 0; i < boton.length; i++) {
                    let btnplay = document.getElementById(`play${i}`);
                    if (btnplay) btnplay.className = 'btn1 btn2';
                }
            }

            else {
                /*Esconder botones */
                const botones = document.querySelectorAll("button");
                console.log('Entro a else')
                for (var i = 0; i < botones.length; i++) {
                    let btnplay = document.getElementById(`play${i}`);
                    if (btnplay) btnplay.className = 'btn1 btn2';
                }

            }

            const play = (event, idTexto) => {
                /*Cambiar lectura de parrafo*/
                if (idTextoMemoria != idTexto) {
                    synth.cancel();
                }

                /*Mostrar y esconder botones al clic*/
                let btnplay = document.getElementById(`play${idTexto.id}`);
                if (btnplay) btnplay.className = 'btn3';
                let btnpause = document.getElementById(`pause${idTexto.id}`);
                if (btnpause) btnpause.className = 'btn2';
                let btnstop = document.getElementById(`stop${idTexto.id}`);
                if (btnstop) btnstop.className = 'btn2';

                /*Lectura de Texto*/
                utterance = new SpeechSynthesisUtterance((idTexto).textContent);
                utterance.voice = speechSynthesis.getVoices()[0];
                synth.speak(utterance);

                /*Quitar Pause*/
                if (synth.paused) {
                    synth.resume();
                }

                /*Mostrar y esconder botones cuando termine la lectura*/
                utterance.onend = function (event) {
                    let btnplay = document.getElementById(`play${idTexto.id}`);
                    if (btnplay) btnplay.className = 'btn2';
                    let btnpause = document.getElementById(`pause${idTexto.id}`);
                    if (btnpause) btnpause.className = 'btn3';
                    let btnstop = document.getElementById(`stop${idTexto.id}`);
                    if (btnstop) btnstop.className = 'btn3';
                }

                /*Guardar IdTexto en memoria (variable)*/
                idTextoMemoria = idTexto
            }

            const pause = (event, idTexto) => {
                if (synth.speaking && !synth.paused) {

                    /*Mostrar y esconder botones al clic*/
                    let btnplay = document.getElementById(`play${idTexto.id}`);
                    if (btnplay) btnplay.className = 'btn2';
                    let btnpause = document.getElementById(`pause${idTexto.id}`);
                    if (btnpause) btnpause.className = 'btn3';
                    let btnstop = document.getElementById(`stop${idTexto.id}`);
                    if (btnstop) btnstop.className = 'btn3';

                    /*Pausar Lectura*/
                    synth.pause();
                }
            }

            const stop = (event, idTexto) => {
                if (synth.speaking) {

                    /*Mostrar y esconder botones al clic*/
                    let btnplay = document.getElementById(`play${idTexto.id}`);
                    if (btnplay) btnplay.className = 'btn2';
                    let btnpause = document.getElementById(`pause${idTexto.id}`);
                    if (btnpause) btnpause.className = 'btn3';
                    let btnstop = document.getElementById(`stop${idTexto.id}`);
                    if (btnstop) btnstop.className = 'btn3';

                    /*Stop Lectura*/
                    synth.cancel();
                }
            }
        }
    }

    /*Desactivar el boton de lectura por parrafos*/
    function onClickDesactivarVoz(event) {
        if (event.target.id == "desactivar-voz") {
            /*Activar y desactivar el boton de lectura por parrafos*/
            document.getElementById("activar-voz").style.display = "block";
            document.getElementById("desactivar-voz").style.display = "none";

            /*Cancelar Lectura*/
            synth.cancel();

            const botones = document.querySelectorAll("button");

            /*Desactivar botones de lectura por parrafo*/
            for (var i = 0; i < botones.length; i++) {
                let btnplay = document.getElementById(`play${i}`);
                if (btnplay) btnplay.className = 'btn1 btn3';
                let btnpause = document.getElementById(`pause${i}`);
                if (btnpause) btnpause.className = 'btn3';
                let btnstop = document.getElementById(`stop${i}`)
                if (btnstop) btnstop.className = 'btn3';
            }
        }
    }

    /*Activar la lectura por selección*/
    function onClickActivarSeleccionVoz(event) {

        /*Activar y desactivar el boton de lectura por selección*/
        document.getElementById("activarSeleccion-voz").style.display = "none";
        document.getElementById("desactivarSeleccion-voz").style.display = "block";
        const selectableTextArea = document.querySelectorAll(".selectable-text-area");

        /*Lectura por Selección*/
        if (event.target.id == "activarSeleccion-voz" && getComputedStyle(desacSelecVoz).display === "block") {
            console.log("Estoy activado");
            var synth = speechSynthesis;



            /*Seleccionar Texto*/
            selectableTextArea.forEach((elem) => {
                elem.addEventListener("mouseup", selectableTextAreaMouseUp);
            });

            document.addEventListener("mousedown", documentMouseDown);

            /*Agregar boton despues de levantar la selección*/
            function selectableTextAreaMouseUp(event) {
                setTimeout(() => {

                    const selectedText = window.getSelection().toString().trim();

                    if (selectedText.length) {
                        let x = event.pageX;
                        let y = event.pageY;

                        const btnPlayWidth = Number(getComputedStyle(btnplay).width.slice(0, -2));
                        const btnPlayHeight = Number(getComputedStyle(btnplay).height.slice(0, -2));
                        const btnPauseWidth = Number(getComputedStyle(btnpause).width.slice(0, -2));
                        const btnPauseHeight = Number(getComputedStyle(btnpause).height.slice(0, -2));
                        const btnStopWidth = Number(getComputedStyle(btnstop).width.slice(0, -2));
                        const btnStopHeight = Number(getComputedStyle(btnstop).height.slice(0, -2));

                        if (document.activeElement !== btnplay && document.activeElement !== btnpause && document.activeElement !== btnstop) {

                            btnplay.style.left = `${x - btnPlayWidth * 0.1}px`;
                            btnplay.style.top = `${y - btnPlayHeight * 1.5}px`;

                            btnplay.style.display = "block";
                            btnplay.classList.add("btnEntrance");

                            btnpause.style.left = `${x - btnPauseWidth * 0.1}px`;
                            btnpause.style.top = `${y - btnPauseHeight * 1.5}px`;

                            btnstop.style.left = `${x - btnStopWidth * 0.1}px`;
                            btnstop.style.top = `${y - btnStopHeight * 1.5}px`;
                        }
                        else {
                            btnplay.style.left = `${x - btnPlayWidth * 0.5}px`;

                            btnpause.style.left = `${x - btnPauseWidth * 1}px`;

                            btnstop.style.left = `${x - btnStopWidth * -0.1}px`;
                        }
                    }
                }, 0);
            }

            btnplay.addEventListener("click", btnPlayClick);
            btnpause.addEventListener("click", btnPauseClick);
            btnstop.addEventListener("click", btnStopClick);

            function btnPlayClick(event) {
                const selectedText = window.getSelection().toString().trim();
                if (selectedText.length) {
                    var utterThis = new SpeechSynthesisUtterance(selectedText);
                    utterThis.voice = synth.getVoices()[0];
                    synth.speak(utterThis);

                    utterThis.onend = function (event) {
                        btnplay.style.display = "block";
                        btnplay.classList.add("btnEntrance");

                        btnpause.style.display = "none";
                        btnpause.classList.remove("btnEntrance");

                        btnstop.style.display = "none";
                        btnstop.classList.remove("btnEntrance");
                    }
                }
                if (synth.paused) {
                    synth.resume();
                }
            }

            function btnPauseClick() {
                if (synth.speaking && !synth.paused) {
                    synth.pause();
                }
            }

            function btnStopClick() {
                var synth = speechSynthesis;
                if (synth.speaking) {
                    synth.cancel();
                }
            }

            document.ondblclick = function (e) {
                btnplay.style.display = "none";
                btnplay.classList.remove("btnEntrance");
                window.getSelection().empty();

                btnpause.style.display = "none";
                btnpause.classList.remove("btnEntrance");

                btnstop.style.display = "none";
                btnstop.classList.remove("btnEntrance");

                synth.cancel();
            }

            function documentMouseDown(event) { }
        }
    }

    function onClickDesactivarSeleccionVoz(event) {
        document.getElementById("activarSeleccion-voz").style.display = "block";
        document.getElementById("desactivarSeleccion-voz").style.display = "none";
        document.onmouseup = function (event) {
        }
        btnplay.style.display = "none";
        btnplay.classList.remove("btnEntrance");
        window.getSelection().empty();

        btnpause.style.display = "none";
        btnpause.classList.remove("btnEntrance");

        btnstop.style.display = "none";
        btnstop.classList.remove("btnEntrance");
        synth.cancel();

    }

    function onClickPlaySeleccion(event) {
        if (event.target.id == "btn_play") {
            btnplay.style.display = "none";
            btnplay.classList.remove("btnEntrance");

            btnpause.style.display = "block";
            btnpause.classList.add("btnEntrance");

            btnstop.style.display = "block";
            btnstop.classList.add("btnEntrance");

        }
    }

    function onClickPauseSeleccion(event) {
        if (event.target.id == "btn_pause") {
            btnplay.style.display = "block";
            btnplay.classList.add("btnEntrance");

            btnpause.style.display = "none";
            btnpause.classList.remove("btnEntrance");

            btnstop.style.display = "none";
            btnstop.classList.remove("btnEntrance");

        }
    }

    function onClickStopSeleccion(event) {
        if (event.target.id == "btn_stop") {
            btnplay.style.display = "block";
            btnpause.classList.add("btnEntrance");

            btnpause.style.display = "none";
            btnpause.classList.remove("btnEntrance");

            btnstop.style.display = "none";
            btnpause.classList.remove("btnEntrance");

        }
    }
}();