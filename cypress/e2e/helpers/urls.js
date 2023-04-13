const host = Cypress.env("HOST")

export const homepageUrl = {
    url: `${host}`
}

export const companyPageUrl = {
    url: `${host}/company`
}

export const careersPageUrl = {
    url: `${host}/careers/join-us/`
}

export const jobDbAdminPageUrl = {
    url: `${host}/job/database-administrator/`
}