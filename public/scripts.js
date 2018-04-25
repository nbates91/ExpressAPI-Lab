let chirpBtn = $('#chirpBtn');
let userInput = $('#userInput');
let messageInput = $('#messageInput');
let body = $('body');
let id;

$.get('http://localhost:3000/api/chirps', function(data) {
	let chirpArr = Object.values(data);
	id = data.nextid;
	console.log(chirpArr);
	for (let i = 0; i < chirpArr.length - 1; i++) {
		let chirp = chirpArr[i];
		let h1 = $(`<h1>${chirp.user}</h1>`);
		let h2 = $(`<h2>${chirp.message}</h2>`);
		let chirpDiv = $(`<div></div>`);
		let delBtn = $(`<button onclick="deleteCheck(${chirp.id})" id="delBtn">X</button>`);
		let editBtn = $(`<button class="btn btn-primary" onclick="editChirp(${chirp.id})">Edit</button>`);
		chirpDiv.append(delBtn);
		chirpDiv.append(editBtn);
		chirpDiv.append(h1);
		chirpDiv.append(h2);
		body.append(chirpDiv);
	}
});

// function editChirp()

function deleteCheck(id) {
	$.ajax({
		url: `http://localhost:3000/api/chirps/${id}`,
		type: 'DELETE',
		success: function() {
			console.log('deleted');
			location.reload();
		},
	});
}

chirpBtn.click(function() {
	$.post('http://localhost:3000/api/chirps', {
		user: userInput.val(),
		message: messageInput.val(),
		id: id,
	});
});
