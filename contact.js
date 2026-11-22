'use strict';

const form = document.querySelector('#contact-form');
const summary = document.querySelector('#error-summary');
const status = document.querySelector('#form-status');
const fields = [
    { input: document.querySelector('#contact-name'), error: document.querySelector('#name-error'), label: 'Name' },
    { input: document.querySelector('#contact-email'), error: document.querySelector('#email-error'), label: 'Email' },
    { input: document.querySelector('#contact-message'), error: document.querySelector('#message-error'), label: 'Message' }
];

function validate(field) {
    const value = field.input.value.trim();
    let message = '';
    if (!value) message = `Enter your ${field.label.toLowerCase()}.`;
    else if (field.input.type === 'email' && field.input.validity.typeMismatch) message = 'Enter an email address like name@example.com.';
    else if (field.input.minLength > 0 && value.length < field.input.minLength) message = 'Write a message with at least 10 characters.';
    field.error.textContent = message ? `Error: ${message}` : '';
    field.error.hidden = !message;
    if (message) field.input.setAttribute('aria-invalid', 'true');
    else field.input.removeAttribute('aria-invalid');
    return message;
}

function updateSummary() {
    summary.replaceChildren();
    const invalidFields = fields.filter(field => field.input.getAttribute('aria-invalid') === 'true');
    summary.hidden = invalidFields.length === 0;
    if (!invalidFields.length) return;
    const heading = document.createElement('h3');
    heading.textContent = 'Please fix the following fields';
    const list = document.createElement('ul');
    invalidFields.forEach(field => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${field.input.id}`;
        link.textContent = `${field.label}: ${field.error.textContent}`;
        link.addEventListener('click', event => {
            event.preventDefault();
            field.input.focus();
        });
        item.append(link);
        list.append(item);
    });
    summary.append(heading, list);
}

form.addEventListener('submit', event => {
    event.preventDefault();
    status.textContent = '';
    fields.forEach(validate);
    updateSummary();
    if (!summary.hidden) summary.focus();
    else status.textContent = 'Your message passes the form checks. This demo has not sent or saved it.';
});
fields.forEach(field => field.input.addEventListener('input', () => {
    status.textContent = '';
    if (field.input.hasAttribute('aria-invalid')) {
        validate(field);
        updateSummary();
    }
}));
// Enable custom validation only after all handlers are ready.
form.noValidate = true;
form.querySelector('button').disabled = false;
