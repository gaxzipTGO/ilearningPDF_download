// background.js
var pattern = new RegExp('\.pdf') 
var buffer_url = ''
chrome.webRequest.onCompleted.addListener(
    function(details) {
      if ( pattern.test( details.url ) ) {
        if ( buffer_url == details.url ) {
        }
        else {
            buffer_url = details.url ;
        }
      }
        
        
    },
    {urls: ["<all_urls>"]}
  );

chrome.action.onClicked.addListener((tab)=>{
    chrome.downloads.download({
        url: buffer_url,  
        filename: 'ilearning.pdf',              
        saveAs: true                            // 是否提示用戶選擇保存位置
      }, function(downloadId) {
        if (chrome.runtime.lastError) {
          console.error('Download failed: ' + chrome.runtime.lastError.message);
        } else {
          console.log('Download started with ID: ' + downloadId);
        }
      });
})


