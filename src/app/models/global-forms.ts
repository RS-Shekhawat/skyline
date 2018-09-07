import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

export interface LoginInterface {
	email: string;
	password: string;
	device_token?: string;
	device_type?: string;

}

export class LoginForm implements LoginInterface {
	public email: string;
	public password: string;
	public device_token?: string;
	public device_type?: string;

	constructor(props?: LoginInterface) {
		for (var prop in props) {
			this[prop] = props[prop];
		}
	}

	/**
	 * This function create a login form object with validations.
	 * @param login : Extend the LoginInterface object.
	 * @returns : {formGroup} object with validation methods
	 */
	public static toFormGroup(login?: LoginInterface): FormGroup {

		login = login || new LoginForm();

		return new FormGroup({
			email: new FormControl(login.email, Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])),
			password: new FormControl(login.password, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])),
			device_token: new FormControl(login.device_token),
			device_type: new FormControl(login.device_type)
		});
	}
}

/**
 * Forgot Password interface & form group part
 */
export interface ForgotInterface {
	email: string;
}

export class ForgotForm implements ForgotInterface {
	public email: string;

	constructor(props?: LoginInterface) {
		for (var prop in props) {
			this[prop] = props[prop];
		}
	}

	/**
	 * This function create a Forgot form object with validations.
	 * @param forgot : Extend the ForgotInterface object.
	 * @returns : {formGroup} object with validation methods
	 */
	public static toFormGroup(forgot?: LoginInterface): FormGroup {

		forgot = forgot || new LoginForm();

		return new FormGroup({
			email: new FormControl(forgot.email, Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])),
		});
	}
}

/**
* Change Password interface & form group part
*/
export interface ChangePasswordInterface {
	password: string;
	confirmPassword: string;
	old_password: string;
}

export class ChangePasswordForm implements ChangePasswordInterface {
	public password: string;
	public confirmPassword: string;
	public old_password: string;

	constructor(props?: ChangePasswordInterface) {
		for (var prop in props) {
			this[prop] = props[prop];
		}
	}

	/**
	 * This function create a login form object with validations.
	 * @param Change password : Extend the ChangePasswordInterface object.
	 * @returns : {formGroup} object with validation methods
	 */
	public static toFormGroup(changePassword?: ChangePasswordInterface): FormGroup {
	return;
		// changePassword = changePassword || new ChangePasswordForm();

		// return new FormGroup({
		// 	password: new FormControl(changePassword.password, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])),
		// 	confirmPassword: new FormControl(changePassword.confirmPassword)
		// }, ValidationService.MatchPassword);
	}

	public static toFormGroupInner(changePassword?: ChangePasswordInterface): FormGroup {
		return ;
		// changePassword = changePassword || new ChangePasswordForm();

		// return new FormGroup({
		// 	old_password: new FormControl(changePassword.old_password, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])),
		// 	password: new FormControl(changePassword.password, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])),
		// 	confirmPassword: new FormControl(changePassword.confirmPassword)
		// }, ValidationService.MatchPassword);
	}

}


/**
 * News Content interface & form group part 
 * 
 */

export interface NewsInterface {
	title?: string;
	title_ar?: string;
	content_text?: string;
	content_text_ar?: string;
	content_image?: any;
	content_image_name?: any;
	newsId?: string;

}

export class NewsForm implements NewsInterface {
	title?: string;
	title_ar?: string;
	content_text?: string;
	content_text_ar?: string;
	content_image?: string;
	content_image_name?: string;
	newsId?: string;

	constructor(props?: NewsInterface) {
		for (var prop in props) {
			this[prop] = props[prop];
		}
	}


	/**
		 * This function create a News form object with validations.
		 * @param News : Extend the NewsInterface object.
		 * @returns : {formGroup} object with validation methods
		 */
	public static toFormGroup(news?: NewsInterface): FormGroup {
		news = news || new NewsForm();
		return new FormGroup({
			title: new FormControl(news.title, Validators.compose([Validators.required])),
			title_ar: new FormControl(news.title_ar, Validators.compose([Validators.required])),
			content_text: new FormControl(news.content_text, Validators.compose([Validators.required, Validators.maxLength(500)])),
			content_text_ar: new FormControl(news.content_text_ar, Validators.compose([Validators.required, Validators.maxLength(500)])),
			content_image: new FormControl(news.content_image, Validators.compose([Validators.required])),
			content_image_name: new FormControl(news.content_image, Validators.compose([Validators.required])),
			newsId: new FormControl()
		});
	}
}

/**
* Contact us interface & form group part
*/
export interface ContactUsInterface {
	subject: string;
	message: string;
}

export class ContactUsForm implements ContactUsInterface {
	public subject: string;
	public message: string;

	constructor(props?: ContactUsInterface) {
		for (var prop in props) {
			this[prop] = props[prop];
		}
	}

	/**
	 * This function create a Contact us form object with validations.
	 * @param Contact us : Extend the ContactUsInterface object.
	 * @returns : {formGroup} object with validation methods
	 */
	public static toFormGroup(ContactUs?: ContactUsInterface): FormGroup {

		ContactUs = ContactUs || new ContactUsForm();

		return new FormGroup({
			subject: new FormControl(ContactUs.subject, Validators.compose([Validators.required])),
			message: new FormControl(ContactUs.message, Validators.compose([Validators.required]))
		});
	}

}

/**
* Add fund interface & form group part
*/
export interface AddFundInterface {
	gift_card_number: string;
}

export class AddFundForm implements AddFundInterface {
	public gift_card_number: string;

	constructor(props?: AddFundInterface) {
		for (var prop in props) {
			this[prop] = props[prop];
		}
	}

	/**
	 * This function create a  Add fund form object with validations.
	 * @param  Add fund : Extend the  AddFundInterface object.
	 * @returns : {formGroup} object with validation methods
	 */
	public static toFormGroup(AddFund?: AddFundInterface): FormGroup {

		AddFund = AddFund || new AddFundForm();

		return new FormGroup({
			gift_card_number: new FormControl(AddFund.gift_card_number, Validators.compose([Validators.required]))
		});
	}

}



/**
 * Code generator interface & form group part 
 * 
 */

export interface CodeInterface {
	code_title?: string;
	promocode?: string;
	amount?: string;
	description?: string;
	max_uses?: any;
	start_date?: any;
	end_date?: string;
	codeId?: string;

}

export class CodeForm implements CodeInterface {
	code_title?: string;
	promocode?: string;
	amount?: string;
	description?: string;
	max_uses?: any;
	start_date?: any;
	end_date?: string;
	codeId?: string;

	constructor(props?: CodeInterface) {
		for (var prop in props) {
			this[prop] = props[prop];
		}
	}


	/**
		 * This function create a Code generator form object with validations.
		 * @param code : Extend the CodeInterface object.
		 * @returns : {formGroup} object with validation methods
		 */
	public static toFormGroup(code?: CodeInterface): FormGroup {
		code = code || new CodeForm();
		return new FormGroup({
			code_title: new FormControl(code.code_title, Validators.compose([Validators.required])),
			promocode: new FormControl(code.promocode, Validators.compose([Validators.required])),
			amount: new FormControl(code.amount, Validators.compose([Validators.required, Validators.maxLength(500)])),
			description: new FormControl(code.description, Validators.compose([Validators.required, Validators.maxLength(500)])),
			max_uses: new FormControl(code.max_uses, Validators.compose([Validators.required])),
			start_date: new FormControl(code.start_date, Validators.compose([Validators.required])),
			end_date: new FormControl(code.end_date, Validators.compose([Validators.required])),
			codeId: new FormControl()
		});
	}
}

/**
 * Merchant add edit interface & form group part 
 * 
 */

export interface MerchantInterface {
	unique_id?: string;
	merchant_name?: string;
	merchant_name_ar?: string;
	website_url?: string;
	commission?: any;
	merchant_image?: any;
	merchantId?: any;

}

export class MerchantForm implements MerchantInterface {
	unique_id?: string;
	merchant_name?: string;
	merchant_name_ar?: string;
	website_url?: string;
	commission?: any;
	merchant_image?: any;
	merchantId?: any;

	constructor(props?: MerchantInterface) {
		for (var prop in props) {
			this[prop] = props[prop];
		}
	}


	/**
		 * This function create a Code generator form object with validations.
		 * @param code : Extend the CodeInterface object.
		 * @returns : {formGroup} object with validation methods
		 */
	public static toFormGroup(mrechant?: MerchantInterface): FormGroup {
		mrechant = mrechant || new MerchantForm();
		return new FormGroup({
			unique_id: new FormControl(mrechant.unique_id, Validators.compose([Validators.required])),
			merchant_name: new FormControl(mrechant.merchant_name, Validators.compose([Validators.required])),
			merchant_name_ar: new FormControl(mrechant.merchant_name_ar, Validators.compose([Validators.required, Validators.maxLength(500)])),
			website_url: new FormControl(mrechant.website_url, Validators.compose([Validators.required, Validators.maxLength(500)])),
			commission: new FormControl(mrechant.commission, Validators.compose([Validators.required])),
			merchant_image: new FormControl(mrechant.merchant_image, Validators.compose([Validators.required])),
			merchantId: new FormControl()
		});
	}
}


/**
 * Static Page Content interface & form group part 
 * 
 */

export interface PageInterface {
	title?: string;
	title_ar?: string;
	body?: string;
	body_ar?: string;
	pageId?: string;

}

export class PageForm implements PageInterface {
	title?: string;
	title_ar?: string;
	body?: string;
	body_ar?: string;
	pageId?: string;

	constructor(props?: PageInterface) {
		for (var prop in props) {
			this[prop] = props[prop];
		}
	}

	/**
		 * This function create a Static page form object with validations.
		 * @param Page : Extend the PageInterface object.
		 * @returns : {formGroup} object with validation methods
		 */
	public static toFormGroup(pagedetail?: PageInterface): FormGroup {
		pagedetail = pagedetail || new PageForm();
		return new FormGroup({
			title: new FormControl(pagedetail.title, Validators.compose([Validators.required])),
			title_ar: new FormControl(pagedetail.title_ar, Validators.compose([Validators.required])),
			body: new FormControl(pagedetail.body, Validators.compose([Validators.required, Validators.maxLength(500)])),
			body_ar: new FormControl(pagedetail.body_ar, Validators.compose([Validators.required, Validators.maxLength(500)])),
			pageId: new FormControl()
		});
	}
}


/**
 * User profile interface & form group part 
 * 
 */

export interface UserInterface {
	full_name?: string;
	email?: string;
	country_code?: string;
	contact?: string;
	address?: string;
	postal_code?: string;

}

export class UserForm implements UserInterface {
	full_name?: string;
	email?: string;
	country_code?: string;
	contact?: string;
	address?: string;
	postal_code?: string;

	constructor(props?: UserInterface) {
		for (var prop in props) {
			this[prop] = props[prop];
		}
	}

	/**
		 * This function create a Static page form object with validations.
		 * @param Page : Extend the PageInterface object.
		 * @returns : {formGroup} object with validation methods
		 */
	public static toFormGroup(userdetail?: UserInterface): FormGroup {
		userdetail = userdetail || new UserForm();
		return new FormGroup({
			full_name: new FormControl(userdetail.full_name, Validators.compose([Validators.required])),
			email: new FormControl(userdetail.email, Validators.compose([Validators.required])),
			country_code: new FormControl(userdetail.country_code, Validators.compose([Validators.required])),
			address: new FormControl(userdetail.address, Validators.compose([Validators.required])),
			postal_code: new FormControl(userdetail.postal_code, Validators.compose([Validators.required])),
			
		});
	}
}