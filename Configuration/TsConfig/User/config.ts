###################################################
# Include all TypoScript files
###################################################


options {
	# RTE
	RTESmallHeight = 500
	RTESmallWidth = 800



	clearCache.pages = 1
	clearCache.all = 1
	
	clearCache.system = 1
	
	
	saveDocNew = 1
	saveDocNew.tt_content = 1
	saveDocNew.pages = 1

	# page tree option
	#pageTree.showDomainNameWithTitle = 1

	# Makes sure the clipboard doesn't clear:
	saveClipboard = 0

	# Reduces the amount of clipboards from 4 to 1:
	clipboardNumberPads = 1
}

admPanel {
	enable.edit = 1

	# Force re-loading the cache for external TS
	override.tsdebug.forceTemplateParsing = 1
}


# Default User value
# @doc http://typo3.org/documentation/document-library/core-documentation/doc_core_tsconfig/4.7.0/view/1/3/#id552119
setup.defaults {
	titleLen = 80
	thumbnailsByDefault = 1
	edit_RTE = 1
	copyLevels = 9
	recursiveDelete = 1
	noOnChangeAlertInTypeFields = 0
	navFrameWidth = 150
	startModule = web_list


}

# Overridden User value
setup.override {
#	startModule = list
}

# http://snippets.typo3.org/c/10/
mod.web_list {
	hideTables=static_template,static_countries,static_country_zones,static_currencies,static_languages,static_territories,static_taxes,static_markets
	itemsLimitSingleTable = 1000
	itemsLimitPerTable = 50
}
