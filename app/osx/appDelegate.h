#import <Cocoa/Cocoa.h>
#import <WebKit/WebKit.h>

@interface MyWindow: NSWindow {	
}
@end

@interface SubstanceAppDelegate : NSObject <NSApplicationDelegate> {
    MyWindow *window;
	WebView *webView;
}



@property (assign) IBOutlet MyWindow *window;
@property (nonatomic, retain) IBOutlet WebView *webView;

@end
