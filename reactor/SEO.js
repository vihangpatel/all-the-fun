import React from "react"

import { SITE, CONTACT_NUMBERS } from "./constants"

export const ContactPoint = () => (
	<script
		type="application/ld+json"
		dangerouslySetInnerHTML={{
			__html: `{
		"@context": "http://schema.org",
		"@type": "Organization",
		"url": "${SITE}",
		"logo": "${SITE}/assets/images/logo.png",
		"contactPoint": [
		{ 
			"@type": "ContactPoint",
			"telephone": "${CONTACT_NUMBERS[0]}",
			"contactType": "customer service",
			"areaServed": [
				"IN"
			],
			"availableLanguage": [
				"English", "Hindi"
			]
		},
		{
			"@type": "ContactPoint",
			"telephone": "${CONTACT_NUMBERS[1]}",
			"contactType": "customer service",
			"areaServed": [
				"EU"
			],
			"availableLanguage": [
				"English"
			]
		}
		]
		}`,
		}}
	/>
)

export const WebsiteSchema = () => (
	<script
		type="application/ld+json"
		dangerouslySetInnerHTML={{
			__html: `{
			"@context": "http://schema.org",
			"@type": "WebSite",
			"name": "React India 2019",
			"url": "${SITE}"
			}`,
		}}
	/>
)

export const description = `Do you want to learn about React and React Native?
Then you shouldn't miss React India - Goa next August! 
You will have the opportunity to improve your developer skills and meet people from around the world, 
while enjoying the beaches of Goa`
