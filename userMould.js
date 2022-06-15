if(!discussion && !flags.includes('preview') && doc.namespace == '사용자') {
		const blockdata = await userblocked(doc.title);
		if(blockdata) {
			data = `
				<div style="border-width: 5px 1px 1px; border-style: solid; border-color: red gray gray; padding: 10px; margin-bottom: 10px;" onmouseover="this.style.borderTopColor=\'blue\';" onmouseout="this.style.borderTopColor=\'red\';">
					<span style="font-size:14pt">이 사용자는 차단된 사용자입니다.</span><br /><br />
					이 사용자는 ${generateTime(toDate(blockdata.date), timeFormat)}에 ${blockdata.expiration == '0' ? '영구적으로' : (generateTime(toDate(blockdata.expiration), timeFormat) + '까지')} 차단되었습니다.<br />
					차단 사유: ${html.escape(blockdata.note)}
				</div>
			` + data;
		}
}
		if(doc.namespace == '사용자') {
			if(!(minor > 0 || (minor == 0 && revision >= 20))) {
				if(getperm('tribune', doc.title)) {
					data = `
			} else if(getperm('admin', doc.title)) {
				data = `
					<div style="border-width: 5px 1px 1px; border-style: solid; border-color: orange gray gray; padding: 10px; margin-bottom: 10px;" onmouseover="this.style.borderTopColor=\'red\';" onmouseout="this.style.borderTopColor=\'orange\';">
						<span style="font-size:14pt">이 사용자는 특수 권한을 가지고 있습니다.</span>
					</div>
				` + data;
			}
		}
	}
