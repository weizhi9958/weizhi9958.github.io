define(function() {
    /** 動畫結束事件 */
    var animationEnd = ["webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend", "animationend"];
    var addSuccessDialogLinstener = false;
    var addErrorDialogLinstener = false;

    return {
        addPersionItem: function(dom, index, id, text) {
        	var div = document.createElement('div');
            var input = document.createElement('input');
            var label = document.createElement('label');
            input.id = 'person' + index;
            input.setAttribute('name', 'person');
            input.setAttribute('type', 'radio');
            input.setAttribute('value', id);

            if(index == 0) {
            	input.checked = true;
            }

            label.setAttribute('for', 'person' + index);
            label.innerHTML = text;

            div.appendChild(input);
            div.appendChild(label);

            if(index == 9999) {
            	var divOuter = document.createElement('div');
            	var divName = document.createElement('div');
            	var inputName = document.createElement('input'); 
            	var divData = document.createElement('div');
            	var inputData = document.createElement('input'); 

            	divOuter.id = 'save_div';
            	divOuter.style.display = 'none';

            	divName.innerHTML = '<span class="c_red">*</span>名字';
            	inputName.id = 'save_name';
            	inputName.setAttribute('type', 'text');
            	inputName.setAttribute('maxlength', '1000');
            	inputName.classList.add('form-control');

            	divData.innerHTML = '人備註(option)';
            	inputData.id = 'save_personData';
            	inputData.setAttribute('type', 'text');
            	inputData.setAttribute('maxlength', '1000');
            	inputData.classList.add('form-control');

            	divOuter.appendChild(divName);
            	divOuter.appendChild(inputName);
            	divOuter.appendChild(divData);
            	divOuter.appendChild(inputData);

            	div.appendChild(divOuter);
            }

            dom.appendChild(div);
        },
        showSuccessDialog: function(text) {
            var dom = document.getElementById('dialogSuccess');
            dom.getElementsByTagName('div')[0].innerHTML = text;
            dom.style.display = null;
            dom.classList.remove('fadeOutDown');
            dom.classList.add('fadeInUp');

            if (addSuccessDialogLinstener) {
                return;
            }
            for (var i = 0; i < animationEnd.length; i++) {
                dom.addEventListener(animationEnd[i], function() {
                    addSuccessDialogLinstener = true;

                    setTimeout(hide, 2000);

                    function hide() {
                        dom.classList.remove('fadeInUp');
                        dom.classList.add('fadeOutDown');
                        setTimeout('document.getElementById("dialogSuccess").style.display = "none"', 1000);
                    }
                });
            }
        },
        showErrorDialog: function(text) {
            var dom = document.getElementById('dialogError');
            dom.getElementsByTagName('div')[0].innerHTML = text;
            dom.style.display = null;
            dom.classList.remove('fadeOutDown');
            dom.classList.add('fadeInUp');

            if (addErrorDialogLinstener) {
                return;
            }
            for (var i = 0; i < animationEnd.length; i++) {
                dom.addEventListener(animationEnd[i], function() {
                    addErrorDialogLinstener = true;

                    setTimeout(hide, 2000);

                    function hide() {
                        dom.classList.remove('fadeInUp');
                        dom.classList.add('fadeOutDown');
                        setTimeout('document.getElementById("dialogError").style.display = "none"', 1000);
                    }
                });
            }
        }
    }
});
